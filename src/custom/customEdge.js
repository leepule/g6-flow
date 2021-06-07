export function customEdges(G6) {
  G6.registerEdge('polyline', {
    setState(name, value, item) {
      const group = item.getContainer();
      const shape = group.get('children')[0];
      if (name === 'active') {
        if (value) {
          shape.attr('stroke', 'rgb(95, 149, 255)');
          shape.attr('endArrow', {
            ...shape.attrs.endArrow,
            fill: 'rgb(95, 149, 255)'
          })
        } else {
          shape.attr('stroke', '#d8d8d8');
          shape.attr('endArrow', {
            ...shape.attrs.endArrow,
            fill: '#d8d8d8'
          })
        }
      }
      if (name === 'selected') {
        if (value) {
          shape.attr('stroke', 'rgb(95, 149, 255)');
          shape.attr('endArrow', {
            ...shape.attrs.endArrow,
            fill: 'rgb(95, 149, 255)'
          })
          shape.attr('shadowColor', 'rgb(95, 149, 255)');
          shape.attr('shadowBlur', 10);
        } else {
          shape.attr('stroke', '#d8d8d8');
          shape.attr('endArrow', {
            ...shape.attrs.endArrow,
            fill: '#d8d8d8'
          })
          shape.attr('shadowColor', '');
          shape.attr('shadowBlur', '');
        }
      }
    }
  }, 'polyline');
}