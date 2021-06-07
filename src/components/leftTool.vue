<template>
  <div class="itempannel">
    <div class="getItem" draggable @dragend="handleDragEnd($event,'startNode')">
      <svg width="80" height="80" xmlns="http://www.w3.org/2000/svg">
        <g>
          <title>background</title>
          <rect x="-1" y="-1" width="82" height="82" id="canvas_background" fill="none" />
          <g id="canvasGrid" display="none">
            <rect id="svg_4" width="80" height="400" x="1" y="1" stroke-width="0" fill="url(#gridpattern)" />
          </g>
        </g>
        <g>
          <title>Layer 1</title>
          <ellipse stroke="#ffc371" fill="#fff3ea" cx="40.000001" cy="39.999998" id="svg_1" rx="39" ry="39" />
          <ellipse fill="#fff" stroke="#000" stroke-width="1.5" cx="139.5" cy="166.4375" id="svg_2" />
          <text style="cursor: move;" fill="#000000" stroke="#ffc371" stroke-width="0" stroke-opacity="null" fill-opacity="null" x="12.013936" y="45.567568" id="svg_3" font-size="14" font-family="Arvo, sans-serif" text-anchor="start" xml:space="preserve" font-weight="normal">开始节点</text>
        </g>
      </svg>
    </div>
    <div class="getItem" draggable @dragend="handleDragEnd($event,'regularNode')">
      <svg width="80" height="49" xmlns="http://www.w3.org/2000/svg">
        <g>
          <title>background</title>
          <rect x="-1" y="-1" width="82" height="51" id="canvas_background" fill="none" />
          <g id="canvasGrid" display="none">
            <rect id="svg_4" width="80" height="400" x="3" y="3" stroke-width="0" fill="url(#gridpattern)" />
          </g>
        </g>
        <g>
          <title>Layer 1</title>
          <ellipse fill="#fff" stroke="#000" stroke-width="1.5" cx="141.5" cy="168.4375" id="svg_2" />
          <rect rx="4" stroke="#5bb1ff" 高度="48" 宽度="78" id="svg_7" height="48.227116" width="79.60015" y="0.56203" x="0.26445" stroke-width="NaN" fill="#e8f8ff" />
          <rect id="svg_8" height="0" width="2.400004" y="52.175019" x="95.400098" fill-opacity="null" stroke-opacity="null" stroke-width="null" stroke="#5cdbd3" fill="#e8fffb" />
          <text xml:space="preserve" text-anchor="start" font-family="'Courier New', Courier, monospace" font-size="13" id="svg_9" y="28.056967" x="14.021708" stroke-width="0" stroke="#5bb1ff" fill="#000000">常规节点</text>
        </g>
      </svg>
    </div>
    <div class="getItem" draggable @dragend="handleDragEnd($event,'judgeNode')">
      <svg width="80" height="80" xmlns="http://www.w3.org/2000/svg">
        <g>
          <title>background</title>
          <rect x="-1" y="-1" width="82" height="82" id="canvas_background" fill="none" />
          <g id="canvasGrid" display="none">
            <rect id="svg_4" width="80" height="400" x="1" y="1" stroke-width="0" fill="url(#gridpattern)" />
          </g>
        </g>
        <g>
          <title>Layer 1</title>
          <ellipse fill="#fff" stroke="#000" stroke-width="1.5" cx="139.5" cy="166.4375" id="svg_2" />
          <rect stroke="#5cdbd3" 高度="56" transform="rotate(45 40.04504776000976,40.213043212890625) " 宽度="55" id="svg_5" height="55.386692" width="55.38669" y="12.519695" x="12.351704" stroke-width="null" fill="#e8fffb" />
          <text xml:space="preserve" text-anchor="start" font-family="Arvo, sans-serif" font-size="14" id="svg_6" y="45.754652" x="12.013331" stroke-width="0" stroke="#5cdbd3" fill="#000000">条件节点</text>
        </g>
      </svg>
    </div>
    <div class="getItem" draggable @dragend="handleDragEnd($event,'endNode')">
      <svg width="80" height="80" xmlns="http://www.w3.org/2000/svg">
        <g>
          <title>background</title>
          <rect x="-1" y="-1" width="82" height="82" id="canvas_background" fill="none" />
          <g id="canvasGrid" display="none">
            <rect id="svg_4" width="80" height="400" x="1" y="1" stroke-width="0" fill="url(#gridpattern)" />
          </g>
        </g>
        <g>
          <title>Layer 1</title>
          <ellipse stroke="#ffc371" fill="#fff3ea" cx="40.000001" cy="39.999998" id="svg_1" rx="39" ry="39" />
          <ellipse fill="#fff" stroke="#000" stroke-width="1.5" cx="139.5" cy="166.4375" id="svg_2" />
          <text fill="#000000" stroke="#ffc371" stroke-width="0" stroke-opacity="null" fill-opacity="null" x="12.013936" y="45.567568" id="svg_3" font-size="14" font-family="Arvo, sans-serif" text-anchor="start" xml:space="preserve" font-weight="normal">结束节点</text>
        </g>
      </svg>
    </div>
  </div>
</template>

<script>
import { randomId } from "@/utils/randomId";
export default {
  data() {
    return {
      addNodeList: {
        startNode: {
          type: "circle",
          size: [72, 72],
          label: "开始节点",
          label_form: "开始节点",
          style: {
            stroke: "#FFC371",
            fill: "#FFF3EA",
            cursor: "move",
          },
          nodetype: "startNode",
          x: 0,
          y: 0,
          anchorPoints: [
            [0.5, 0],
            [1, 0.5],
            [0.5, 1],
            [0, 0.5],
          ],
        },
        regularNode: {
          type: "rect",
          size: [100, 50],
          label: "常规节点",
          label_form: "常规节点",
          style: {
            fill: "#E8F8FF",
            stroke: "#5BB1FF",
            radius: 5,
            cursor: "move",
          },
          nodetype: "regularNode",
          x: 0,
          y: 0,
          anchorPoints: [
            [0.5, 0],
            [1, 0.5],
            [0.5, 1],
            [0, 0.5],
          ],
        },
        judgeNode: {
          type: "diamond",
          size: [72, 72],
          label: "条件节点",
          label_form: "条件节点",
          style: {
            fill: "#E8FFFB",
            stroke: "#5CDBD3",
            cursor: "move",
          },
          nodetype: "judgeNode",
          x: 0,
          y: 0,
          anchorPoints: [
            [0.5, 0],
            [1, 0.5],
            [0.5, 1],
            [0, 0.5],
          ],
        },
        endNode: {
          type: "circle",
          size: [72, 72],
          label: "结束节点",
          label_form: "结束节点",
          style: {
            stroke: "#FFC371",
            fill: "#FFF3EA",
            cursor: "move",
          },
          nodetype: "endNode",
          x: 0,
          y: 0,
          anchorPoints: [
            [0.5, 0],
            [1, 0.5],
            [0.5, 1],
            [0, 0.5],
          ],
        },
      }
    };
  },
  props: { gra: Object },
  mounted() {},
  methods: {
    handleDragEnd(e, item) {
      let data = JSON.parse(JSON.stringify(this.addNodeList[item]));
      data.id = randomId(false, 19);
      const xy = this.gra.getPointByClient(e.x, e.y);
      data.x = xy.x;
      data.y = xy.y;
      this.gra.addItem("node", data);
      this.gra.setMode("default");
    },
  },
};
</script>

<style lang="less" scoped>
.itempannel {
  box-sizing: border-box;
  background-color: #fbfbfb;
  border-right: 1px solid #dadce0;
  padding-top: 10px;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: flex-start;
  .getItem {
    cursor: move;
    width: 80px;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      width: 100%;
    }
  }
}
</style>