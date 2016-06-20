import React, { PropTypes } from 'react';

// 8 8 8 8
// 8 8 8 8
// 8 8 8 8

const GridContainer = ({ grid, children }) => {
  // [
  //   ['a', 'b', 'c', 'c'],
  //   ['a', 'd', 'c', 'c'],
  //   ['e', 'e', 'f', 'g'],
  // ]

  const positions = grid.map((row, y) =>
    row.map((cell, x) => ({
      name: cell,
      startX: x,
      startY: y,
      endX: x + 1,
      endY: y + 1,
    }))
  );

  // [
  //   [{a}, {b}, {c}, {c}],
  //   [{a}, {d}, {c}, {c}],
  //   [{e}, {e}, {f}, {g}],
  // ]

  const flattenedRows = positions.map(row =>
    row.reduce((acc, cell) => {
      const existingCells = acc[cell.name] || [];

      return {
        ...acc,
        [cell.name]: [...existingCells, cell],
      };
    }, {})
  );

  // [
  //   { a: [1], b: [1], c: [2]},
  //   { a: [1], d: [1], c: [2]},
  //   { e: [2], f: [1], g: [1]},
  // ]

  const cells = flattenedRows.reduce((acc, row) => {
    if (Object.keys(acc).length === 0) return row;

    return Object.keys(row).reduce((acc2, key) => {
      const existingCells = acc2[key] || [];

      return {
        ...acc2,
        [key]: [...existingCells, ...row[key]],
      };
    }, acc);
  }, {});

  // {
  //   a: [2],
  //   b: [1],
  //   c: [4],
  //   d: [1],
  //   e: [2],
  //   f: [1],
  //   g: [1],
  // ]

  // 8, 8, 8, 8
  // 8, 8, 8, 8
  // 8, 8, 8, 8

  const cellSurface = cell => {
    const lengthX = cell.endX - cell.startX;
    const lengthY = cell.endY - cell.startY;

    return lengthX * lengthY;
  };

  const mergeCells = (cellA, cellB) => {
    const [largest, smallest] = cellSurface(cellA) >= cellSurface(cellB)
      ? [cellA, cellB]
      : [cellB, cellA];

    const xInRange = largest.startX <= smallest.startX && largest.endX >= smallest.endX;
    const yInRange = largest.startY <= smallest.startY && largest.endY >= smallest.endY;
    const xMatch = largest.startX === smallest.endX || largest.endX === smallest.startX;
    const yMatch = largest.startY === smallest.endY || largest.endY === smallest.startY;

    const canMergeX = xMatch && yInRange;
    const canMergeY = yMatch && xInRange;

    if (canMergeX) {
      return {
        ...largest,
        startX: largest.startX === smallest.startX + 1 ? smallest.startX : largest.startX,
        endX: largest.endX === smallest.endX - 1 ? smallest.endX : largest.endX,
      };
    }

    if (canMergeY) {
      return {
        ...largest,
        startY: largest.startY === smallest.startY + 1 ? smallest.startY : largest.startY,
        endY: largest.endY === smallest.endY - 1 ? smallest.endY : largest.endY,
      };
    }

    return largest;
  };

  const gridCells = Object.keys(cells).reduce((acc, cellName) => ({
    ...acc,
    [cellName]: cells[cellName].reduce((acc2, cell) => mergeCells(acc2, cell), {}),
  }), {});

  return (
    <div>
      {children}
      {JSON.stringify(gridCells)}
    </div>
  );
};

GridContainer.propTypes = {
  grid: PropTypes.array,
  children: PropTypes.node,
};

GridContainer.displayName = 'GridContainer';

export default GridContainer;
