<template>
  <div style="height: 100%;">
    <div ref="map" class="map"></div>

    <div ref="pointInfo" class="pointInfo" :style="{ 'display': cachedDetail ? 'block' : 'none' }">
      <p>数据层级：xxx</p>
      <p>销售区域：xxx</p>
      <p>生态公司类型：xxx</p>
      <p>生态公司名称：xxx</p>
      <p>生态公司产品：xxx</p>
      <p>部署数量：xxx</p>
      <p>部署时间：xxx</p>
      <p>操作人员：xxx</p>
    </div>
    <div ref="editPoint" class="editPoint" :style="{ 'display': contextmenuPopup ? 'flex' : 'none' }">
      <template v-if="contextmenuPopStatus">
        <el-button icon="el-icon-delete" @click="del">删除数据</el-button>
        <el-button icon="el-icon-edit" @click="del">编辑数据</el-button>
        <el-button icon="el-icon-search" @click="del">查看详情</el-button>
      </template>
      <template v-if="!contextmenuPopStatus">
        <el-button icon="el-icon-edit" @click="del">新增数据</el-button>
      </template>

    </div>
  </div>
</template>

<script>
import { MapService } from '@/views/map/service/mapService'
import mapConfig from '@/config/map.config'
export const mapFeatureConfig = {
  POPUP_INFO: 'PopupInfo', MENU: 'Menu', OPTION_MENU: 'OptionMenu'
}
export default {
  name: "mapFeature",
  props: {
    disableConfig: {//disable-config="['PopupInfo','Menu','OptionMenu']"
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      map: null,
      detailInfo: null,
      contextmenuPopup: false,
      list: [
        {
          id: '1',
          coord: [108.926593, 34.213389],
        }
      ],
      mapService: new MapService()
    };
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        //this.removeFeatureByIds('1')
        this.mapService.setMapCenterAnimate(mapConfig.map_center)
      }, 3000)
      console.log(this.disableConfig)
      this.initMap()
    })
  },
  computed: {
    cachedDetail: {
      get() {
        return this.detailInfo
      },
      set(newValue) {
        this.detailInfo = newValue;
      }
    },
    contextmenuPopStatus() {
      return this.contextmenuPopup && this.contextmenuPopup.id
    },
    disableInfo() {
      return this.disableConfig.indexOf(mapFeatureConfig.POPUP_INFO) > -1
    },
    disableMenu() {
      return this.disableConfig.indexOf(mapFeatureConfig.MENU) > -1
    },
    disableMenuOption() {
      return this.disableConfig.indexOf(mapFeatureConfig.OPTION_MENU) > -1
    }
  },
  methods: {
    initMap() {
      this.map = this.mapService.initMap(this.$refs.map)
      this.drawPoints();
      if (!this.disableInfo) { this.addMapListener() }
      this.addMapContextmenuListener();
    },
    drawPoints() {
      this.mapService.drawPointFeature(this.list);
    },
    addMapContextmenuListener() {
      this.mapService.addMapContextmenuEvent((feature) => {
        this.clearOverlay();
        const { values_ } = feature;
        if (values_ && values_.id && values_.coordinate) {
          if (this.disableMenu) return
          this.contextmenuPopup = values_;
        } else if (feature.coordinate) {
          if (this.disableMenuOption) return
          this.contextmenuPopup = true;
          this.mapService.addOverlay(this.$refs.editPoint, { coordinate: feature.coordinate });
        }
      })
    },
    addMapListener() {
      this.mapService.addMapListener((feature) => {
        this.clearOverlay();
        if (!feature) return
        const { values_ } = feature;
        if (values_ && values_.id && values_.coordinate) {
          this.detailInfo = feature.values_;
          this.showPopup(this.detailInfo);
        }
      });
    },
    showPopup($event) {
      this.mapService.addOverlay(this.$refs.pointInfo, $event);
      this.mapService.setMapCenterAnimate($event.coordinate);
    },
    resetContextmenu() {
      this.contextmenuPopup = false;
    },
    clearOverlay() {
      this.cachedDetail = null;
      this.contextmenuPopup = false;
      this.mapService.removeOverlay(this.$refs.pointInfo)
      this.mapService.removeOverlay(this.$refs.editPoint)
    },
    clearFeature() {
      this.mapService.clearAllFeature();
    },
    clearCollectionFeature() {
      this.mapService.clearAllCollection();
    },
    del() {
      this.resetContextmenu();
      this.clearOverlay()
      this.getAreaData()
    },
    removeFeatureByIds(ids) {
      this.mapService.removeFeature(ids);
    },
    async getAreaData() {
      const _data = await this.$axios.get(`https://geo.datav.aliyun.com/areas_v3/bound/610000.json`)
        .then(data => {
          return data.data
        })
      this.drawMultiPolygonFeatures(_data)

    },
    drawMultiPolygonFeatures(data) {
      this.clearCollectionFeature();
      this.mapService.drawFeatureCollection(data)
    },
    drawPolygon(data) {
      data.forEach(e => {
        this.mapService.drawPolygonFeature(new Date().getTime(), e);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.map {
  position: relative;
  height: 100%;
}

.pointInfo {
  height: 300px;
  width: 300px;
  background: #fff;

  p {
    margin-top: 10px;

    &:first-child {
      margin-top: 0;
    }
  }
}

.editPoint {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
</style>

