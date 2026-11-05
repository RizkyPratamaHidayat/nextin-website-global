import React from "react";

// Peta Asia-Pasifik, koordinat [lon, lat] disederhanakan manual dari slide seminar "Think big" (gambaran kasar, bukan peta akurat).
const LAND = [
  // daratan Asia (dipotong ke area peta)
  [[60, 69], [80, 73], [110, 77], [140, 72], [170, 70], [180, 68], [180, 65], [165, 60], [155, 58], [142, 53], [135, 43], [129, 35], [126, 35], [122, 40], [118, 38], [121, 31], [120, 25], [110, 20], [108, 16], [109, 11], [105, 9], [100, 13], [100, 7], [103, 1.5], [98, 8], [98, 16], [94, 17], [92, 22], [88, 22], [80, 15], [77, 8], [73, 17], [70, 21], [66, 25], [60, 25]],
  [[95.3, 5.6], [98.5, 4], [103.5, -1], [106, -3], [105.8, -5.9], [101, -3], [95.8, 2.5]], // Sumatra
  [[105.2, -6.8], [108, -6.3], [114.5, -7.7], [114.5, -8.7], [108, -7.8], [105.5, -7.2]], // Jawa
  [[109, 1.5], [111, 2], [115, 5], [118, 6.5], [119, 5], [117.5, 1], [116, -4], [110.5, -3], [109, -1]], // Kalimantan
  [[119.5, 0], [125, 1.5], [122, -1], [123, -5], [120, -5.5], [119.5, -2]], // Sulawesi
  [[131, -1], [141, -2.5], [150, -10], [142, -9.5], [138, -8], [132, -4]], // Papua
  [[120, 18], [122, 18], [124, 12], [126, 7], [125, 6], [122, 8], [120, 14]], // Filipina
  [[114, -22], [114, -34], [118, -35], [124, -33.5], [131, -31.5], [138, -35], [141, -38], [147, -39], [150, -37], [153, -28], [153, -25], [146, -19], [142, -10.7], [141, -17], [136, -15], [131, -11.5], [129, -15], [122, -17]], // Australia
  [[130, 31], [135, 34], [140, 35.5], [142, 40], [141, 45], [139, 40], [133, 35.5]], // Jepang
];

// Area yang ditampilin: lon 88..160, lat 30..-42. 1 derajat = 10 unit.
const LON0 = 88, LAT0 = 30, K = 10, W = 720, H = 720;
const x = (lon) => (lon - LON0) * K;
const y = (lat) => (LAT0 - lat) * K;
const toPath = (poly) => poly.map(([lon, lat], i) => `${i ? "L" : "M"}${x(lon).toFixed(1)} ${y(lat).toFixed(1)}`).join("") + "Z";

// [kode, lon, lat, posisi label]. Nama negara aja, tanpa nama klien (DEC-014).
const PINS = [
  ["hk", 114.2, 22.3, "right"],
  ["my", 102, 4, "above"],
  ["id", 112, -7, "right"],
  ["au", 134, -25, "below"],
];

const LABEL_W = 170, LABEL_H = 44;
const labelPos = (cx, cy, dir) => ({
  right: [cx + 26, cy - LABEL_H / 2],
  above: [cx - LABEL_W / 2, cy - 26 - LABEL_H],
  below: [cx - LABEL_W / 2, cy + 26],
}[dir]);

export const ClientMap = ({ names, label }) => (
  <svg className="map" viewBox={`0 0 ${W} ${H}`} role="img" aria-label={label}>
    <g className="map__land">{LAND.map((p, i) => <path key={i} d={toPath(p)} />)}</g>
    {PINS.map(([code, lon, lat, dir], i) => {
      const cx = x(lon), cy = y(lat);
      const [lx, ly] = labelPos(cx, cy, dir);
      return (
        <g key={code} className="map__pin" style={{ "--i": i }}>
          <circle className="map__halo" cx={cx} cy={cy} r="22" />
          <circle className="map__dot" cx={cx} cy={cy} r="9" />
          <rect className="map__tag" x={lx} y={ly} width={LABEL_W} height={LABEL_H} rx="22" />
          <text className="map__text" x={lx + LABEL_W / 2} y={ly + LABEL_H / 2}>{names[code]}</text>
        </g>
      );
    })}
  </svg>
);
