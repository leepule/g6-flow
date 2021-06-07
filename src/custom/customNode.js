export function regis(G6) {
	G6.registerNode('rect', {
		// 根据后拉中的锚点绘制锚点圆
		afterDraw(cfg, group) {
			const bbox = group.getBBox();
			const anchorPoints = this.getAnchorPoints(cfg)
			anchorPoints.forEach((anchorPos, i) => {
				group.addShape('circle', {
					attrs: {
						r: 10,
						x: bbox.x + bbox.width * anchorPos[0],
						y: bbox.y + bbox.height * anchorPos[1],
						fill: '#5F95FF',
						// stroke: '#5F95FF',
						cursor: "crosshair",
						opacity: 0
					},
					name: `connect-point`,
				})
				group.addShape('circle', {
					attrs: {
						r: 3,
						x: bbox.x + bbox.width * anchorPos[0],
						y: bbox.y + bbox.height * anchorPos[1],
						fill: '#fff',
						stroke: '#5F95FF',
						cursor: "crosshair",
					},
					name: `anchor-point`, // 名称，用于按group.find（he>he.get（'name'）和锚点进行搜索
					anchorPointIdx: i, // 标记锚定点圆的idx
					links: 0, // 缓存连接到此形状的边数
					visible: false, // 默认情况下不可见，当链接>1或节点处于showAnchors状态时显示
					draggable: true, // 允许捕获此形状上的拖动事件
				})
			})
		},
		getAnchorPoints(cfg) {
			return cfg.anchorPoints || [
				[0.5, 0],
				[1, 0.5],
				[0.5, 1],
				[0, 0.5]
			];
		},
		setState(name, value, item) {
			const group = item.getContainer();
			const shape = group.get('children')[0];

			if (name === 'showAnchors') {
				const anchorPoints = group.findAll(ele => ele.get('name') === 'anchor-point');
				anchorPoints.forEach(point => {
					if (value || point.get('links') > 0) point.show()
					else point.hide()
				})
			}
			
			if (name === 'selected') {
				if (value) {
					shape.attr('fill', '#96D6FB');
					shape.attr('stroke', '#5F95FF');
					shape.attr('shadowColor', '#BBE6FD');
					shape.attr('shadowBlur', 10);
				} else {
					shape.attr('fill', '#E8F8FF');
					shape.attr('stroke', '#5BB1FF');
					shape.attr('shadowColor', '');
					shape.attr('shadowBlur', 0);
				}
			}

			if (name === 'connect') {
				if (value) {
					group.getChildren().map((child) => {
						if (child.cfg.type === 'circle' && child.cfg.name === 'connect-point') {
							child.attr('opacity', 0.3)
						}
					})
				} else {
					group.getChildren().map((child) => {
						if (child.cfg.type === 'circle' && child.cfg.name === 'connect-point') {
							child.attr('opacity', 0)
						}
					})
				}
			}
		},
		afterUpdate(cfg, item) {
			const group = item._cfg.group;
			const bbox = group.getBBox();
			let Circles = [];
			group.getChildren().map((child) => {
				if (child.cfg.type === 'circle') {
					Circles.push(child)
				}
			})
			cfg.anchorPoints.map((anchorPoint, i) => {
				Circles.map((circle) => {
					if (i === circle.cfg.anchorPointIdx) {
						circle.attr('x', bbox.x + bbox.width * anchorPoint[0])
						circle.attr('y', bbox.y + bbox.height * anchorPoint[1])
					}
				})
			})
		}
	}, 'rect');
	G6.registerNode('diamond', {
		// 根据后拉中的锚点绘制锚点圆
		afterDraw(cfg, group) {
			const bbox = group.getBBox();
			const anchorPoints = this.getAnchorPoints(cfg)
			anchorPoints.forEach((anchorPos, i) => {
				group.addShape('circle', {
					attrs: {
						r: 10,
						x: bbox.x + bbox.width * anchorPos[0],
						y: bbox.y + bbox.height * anchorPos[1],
						fill: '#5F95FF',
						// stroke: '#5F95FF',
						cursor: "crosshair",
						opacity: 0
					},
					name: `connect-point`,
				})
				group.addShape('circle', {
					attrs: {
						r: 3,
						x: bbox.x + bbox.width * anchorPos[0],
						y: bbox.y + bbox.height * anchorPos[1],
						fill: '#fff',
						stroke: '#5F95FF',
						cursor: "crosshair"
					},
					name: `anchor-point`, // 名称，用于按group.find（he>he.get（'name'）和锚点进行搜索
					anchorPointIdx: i, // 标记锚定点圆的idx
					links: 0, // 缓存连接到此形状的边数
					visible: false, // 默认情况下不可见，当链接>1或节点处于showAnchors状态时显示
					draggable: true // 允许捕获此形状上的拖动事件
				})
			})
		},
		getAnchorPoints(cfg) {
			return cfg.anchorPoints || [
				[0, 0.5],
				[0.33, 0],
				[0.66, 0],
				[1, 0.5],
				[0.33, 1],
				[0.66, 1]
			];
		},
		// 响应状态更改并显示/隐藏链接点圆
		setState(name, value, item) {
			const group = item.getContainer();
			const shape = group.get('children')[0];
			if (name === 'showAnchors') {
				const anchorPoints = item.getContainer().findAll(ele => ele.get('name') === 'anchor-point');
				anchorPoints.forEach(point => {
					if (value || point.get('links') > 0) point.show()
					else point.hide()
				})
			}

			if (name === 'selected') {
				if (value) {
					shape.attr('fill', '#8DE8DE');
					shape.attr('stroke', '#27C2C1');
					shape.attr('shadowColor', '#B6F3EA');
					shape.attr('shadowBlur', 10);
				} else {
					shape.attr('fill', '#E8FFFB');
					shape.attr('stroke', '#5CDBD3');
					shape.attr('shadowColor', '');
					shape.attr('shadowBlur', 0);
				}
			}

			if (name === 'connect') {
				if (value) {
					group.getChildren().map((child) => {
						if (child.cfg.type === 'circle' && child.cfg.name === 'connect-point') {
							child.attr('opacity', 0.3)
						}
					})
				} else {
					group.getChildren().map((child) => {
						if (child.cfg.type === 'circle' && child.cfg.name === 'connect-point') {
							child.attr('opacity', 0)
						}
					})
				}
			}

		}
	}, 'diamond');
	G6.registerNode('circle', {
		// 根据后拉中的锚点绘制锚点圆
		afterDraw(cfg, group) {
			const bbox = group.getBBox();
			const anchorPoints = this.getAnchorPoints(cfg)
			anchorPoints.forEach((anchorPos, i) => {
				group.addShape('circle', {
					attrs: {
						r: 10,
						x: bbox.x + bbox.width * anchorPos[0],
						y: bbox.y + bbox.height * anchorPos[1],
						fill: '#5F95FF',
						// stroke: '#5F95FF',
						cursor: "crosshair",
						opacity: 0
					},
					name: `connect-point`,
				})
				group.addShape('circle', {
					attrs: {
						r: 3,
						x: bbox.x + bbox.width * anchorPos[0],
						y: bbox.y + bbox.height * anchorPos[1],
						fill: '#fff',
						stroke: '#5F95FF',
						cursor: "crosshair"
					},
					name: `anchor-point`, // 名称，用于按group.find（he>he.get（'name'）和锚点进行搜索
					anchorPointIdx: i, // 标记锚定点圆的idx
					links: 0, // 缓存连接到此形状的边数
					visible: false, // 默认情况下不可见，当链接>1或节点处于showAnchors状态时显示
					draggable: true, // 允许捕获此形状上的拖动事件
				})
			})
		},
		getAnchorPoints(cfg) {
			return cfg.anchorPoints || [
				[0, 0.5],
				[0.33, 0],
				[0.66, 0],
				[1, 0.5],
				[0.33, 1],
				[0.66, 1]
			];
		},
		// 响应状态更改并显示/隐藏链接点圆
		setState(name, value, item) {
			const group = item.getContainer();
			const shape = group.get('children')[0];
			if (name === 'showAnchors') {
				const anchorPoints = item.getContainer().findAll(ele => ele.get('name') === 'anchor-point');
				anchorPoints.forEach(point => {
					if (value || point.get('links') > 0) point.show()
					else point.hide()
				})
			}

			if (name === 'selected') {
				if (value) {
					shape.attr('fill', '#FCD498');
					shape.attr('stroke', '#F88C2C');
					shape.attr('shadowColor', '#FDE5BB');
					shape.attr('shadowBlur', 10);
				} else {
					shape.attr('fill', '#FFF3EA');
					shape.attr('stroke', '#FFC371');
					shape.attr('shadowColor', '');
					shape.attr('shadowBlur', 0);
				}
			}

			if (name === 'connect') {
				if (value) {
					group.getChildren().map((child) => {
						if (child.cfg.type === 'circle' && child.cfg.name === 'connect-point') {
							child.attr('opacity', 0.3)
						}
					})
				} else {
					group.getChildren().map((child) => {
						if (child.cfg.type === 'circle' && child.cfg.name === 'connect-point') {
							child.attr('opacity', 0)
						}
					})
				}
			}
		}
	}, 'circle');
}