<template>
  <div style="height: 100%;">
    <div ref="map" class="map"></div>

    <div ref="pointInfo" class="pointInfo" :style="{ 'display': cachedDetail && !disableInfo ? 'block' : 'none' }">
      <p>数据：xxx</p>
    </div>
    <div ref="editPoint" class="editPoint" :style="{ 'display': contextmenuPopup ? 'flex' : 'none' }">
      <template v-if="contextmenuPopStatus && !disableMenuOption">
        <el-button icon="el-icon-delete" @click.stop="del">删除数据</el-button>
        <el-button icon="el-icon-edit" @click.stop="del">编辑数据</el-button>
        <el-button icon="el-icon-search" @click.stop="detail">查看详情</el-button>
      </template>
      <template v-if="!contextmenuPopStatus && !disableMenu">
        <el-button icon="el-icon-edit" @click.stop="del">新增数据</el-button>
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
    })
    this.initMap()
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
      //this.drawPolygonMock();
      this.addMapListener()
      this.addMapContextmenuListener();
    },
    drawPolygonInteraction() {
      this.mapService.drawMapShape('Polygon', (data) => {
        console.log(_.chunk(data.flatCoordinates, 2))
        this.mapService.clearDrawShape()
      })
    },
    drawPoints() {
      this.mapService.drawPointFeature(this.list);
      const cd = [[[108.91781849029286, 34.22521444584457], [108.89684302404538, 34.19811347401231], [108.89068754490928, 34.18988258472677], [108.93779718526177, 34.187676574711055], [108.94610054388981, 34.18815933136642], [108.94660634120373, 34.22278002977957], [108.92317354470337, 34.22275232777307], [108.91781849029286, 34.22521444584457]]]
      setTimeout(() => {
        //this.mapService.drawPolygonFeature('e.id', cd, { id: '0' });
        this.drawPolygon([cd])
        this.mapService.featureModify();
      }, 1000)

    },
    addMapContextmenuListener() {
      this.mapService.addMapContextmenuEvent((feature) => {
        this.clearOverlay();
        const { values_ } = feature;
        if (values_ && values_.id && values_.coordinate) {
          this.contextmenuPopup = values_;
        } else if (feature.coordinate) {
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
        this.mapService.drawPolygonFeature('001', e);
      });
    },
    detail() {
      this.clearOverlay()
      this.$emit('detail', { data: 'detail', status: 200 })
    }
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

