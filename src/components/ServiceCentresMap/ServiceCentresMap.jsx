// ================================
// Service Centres Map - Analogics Website
// Uses d3-geo for projection + real India GeoJSON (React 19 compatible)
// ================================

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { geoMercator, geoPath } from 'd3-geo';
import './ServiceCentresMap.css';

const WIDTH  = 700;
const HEIGHT = 780;

// Mercator projection centred on India
const projection = geoMercator()
  .scale(1200)
  .center([82.5, 23])
  .translate([WIDTH / 2, HEIGHT / 2]);

const pathGen = geoPath().projection(projection);

// Real GPS coordinates [longitude, latitude]
const locations = [
  {
    id: 'hyderabad', city: 'Hyderabad', type: 'corporate',
    coordinates: [78.4867, 17.385],
    info: {
      name: 'Analogics Tech India Ltd.',
      address: '# 9/10, Road No. 6, Nacharam Industrial Estate, Hyderabad – 500 076, Telangana',
      phone: '+91-40-6735 5000',
    },
  },
  {
    id: 'bangalore', city: 'Bangalore', type: 'branch',
    coordinates: [77.5946, 12.9716],
    info: { name: 'Analogics Tech India Ltd.', contact: 'Nanda Kumar', address: 'Bangalore, Karnataka', phone: '+91-40-6735 5000' },
  },
  {
    id: 'bhubaneswar', city: 'Bhubaneswar', type: 'branch',
    coordinates: [85.8245, 20.2961],
    info: { name: 'Analogics Tech India Ltd.', address: 'Bhubaneswar, Odisha', phone: '+91-40-6735 5000' },
  },
  {
    id: 'kolkata', city: 'Kolkata', type: 'branch',
    coordinates: [88.3639, 22.5726],
    info: { name: 'Analogics Tech India Ltd.', address: 'Kolkata, West Bengal', phone: '+91-40-6735 5000' },
  },
  {
    id: 'ludhiana', city: 'Ludhiana / Patiala', type: 'service',
    coordinates: [75.8573, 30.901],
    info: { name: 'Analogics Service Center', address: 'Ludhiana / Patiala, Punjab', phone: '+91-40-6735 5000' },
  },
  {
    id: 'shimla', city: 'Shimla', type: 'service',
    coordinates: [77.1734, 31.1048],
    info: { name: 'Analogics Service Center', address: 'Shimla, Himachal Pradesh', phone: '+91-40-6735 5000' },
  },
  {
    id: 'uttarakhand', city: 'Uttarakhand', type: 'service',
    coordinates: [78.0322, 30.0668],
    info: { name: 'Analogics Service Center', address: 'Dehradun, Uttarakhand', phone: '+91-40-6735 5000' },
  },
  {
    id: 'delhi', city: 'Delhi', type: 'branch',
    coordinates: [77.1025, 28.7041],
    info: { name: 'Analogics Tech India Ltd.', contact: 'Vikram Yadav', address: 'New Delhi, Delhi', phone: '+91-40-6735 5000' },
  },
  {
    id: 'meerut', city: 'Meerut', type: 'service',
    coordinates: [77.7064, 28.9845],
    info: { name: 'Analogics Service Center', address: 'Meerut, Uttar Pradesh', phone: '+91-40-6735 5000' },
  },
  {
    id: 'jaipur', city: 'Jaipur', type: 'service',
    coordinates: [75.7873, 26.9124],
    info: { name: 'Analogics Service Center', address: 'Jaipur, Rajasthan', phone: '+91-40-6735 5000' },
  },
  {
    id: 'lucknow', city: 'Lucknow', type: 'service',
    coordinates: [80.9462, 26.8467],
    info: { name: 'Analogics Service Center', address: 'Lucknow, Uttar Pradesh', phone: '+91-40-6735 5000' },
  },
  {
    id: 'patna', city: 'Patna (Bihar)', type: 'service',
    coordinates: [85.1376, 25.5941],
    info: { name: 'Analogics Service Center', address: 'Patna, Bihar', phone: '+91-40-6735 5000' },
  },
  {
    id: 'ahmedabad', city: 'Ahmedabad', type: 'service',
    coordinates: [72.5714, 23.0225],
    info: { name: 'Analogics Service Center', address: 'Ahmedabad, Gujarat', phone: '+91-40-6735 5000' },
  },
  {
    id: 'bhopal', city: 'Bhopal', type: 'service',
    coordinates: [77.4126, 23.2599],
    info: { name: 'Analogics Service Center', address: 'Bhopal, Madhya Pradesh', phone: '+91-40-6735 5000' },
  },
  {
    id: 'nagpur', city: 'Nagpur', type: 'service',
    coordinates: [79.0882, 21.1458],
    info: { name: 'Analogics Service Center', address: 'Nagpur, Maharashtra', phone: '+91-40-6735 5000' },
  },
  {
    id: 'raipur', city: 'Raipur', type: 'service',
    coordinates: [81.6296, 21.2514],
    info: { name: 'Analogics Service Center', address: 'Raipur, Chhattisgarh', phone: '+91-40-6735 5000' },
  },
  {
    id: 'visakhapatnam', city: 'Visakhapatnam', type: 'service',
    coordinates: [83.2185, 17.6868],
    info: { name: 'Analogics Service Center', address: 'Visakhapatnam, Andhra Pradesh', phone: '+91-40-6735 5000' },
  },
  {
    id: 'vijayawada', city: 'Vijayawada', type: 'service',
    coordinates: [80.648, 16.5062],
    info: { name: 'Analogics Service Center', address: 'Vijayawada, Andhra Pradesh', phone: '+91-40-6735 5000' },
  },
  {
    id: 'hubli', city: 'Hubli', type: 'service',
    coordinates: [75.124, 15.3647],
    info: { name: 'Analogics Service Center', address: 'Hubli, Karnataka', phone: '+91-40-6735 5000' },
  },
  {
    id: 'chennai', city: 'Chennai', type: 'service',
    coordinates: [80.2707, 13.0827],
    info: { name: 'Analogics Service Center', address: 'Chennai, Tamil Nadu', phone: '+91-40-6735 5000' },
  },
];

// Project all coordinates once
const projected = locations.map((loc) => {
  const [px, py] = projection(loc.coordinates);
  return { ...loc, px, py };
});

// Star polygon helper
function starPoints(cx, cy, outerR, innerR, points = 5) {
  const pts = [];
  for (let i = 0; i < points * 2; i++) {
    const angle = (i * Math.PI) / points - Math.PI / 2;
    const r = i % 2 === 0 ? outerR : innerR;
    pts.push(`${(cx + Math.cos(angle) * r).toFixed(2)},${(cy + Math.sin(angle) * r).toFixed(2)}`);
  }
  return pts.join(' ');
}

const ServiceCentresMap = () => {
  const [geoPaths, setGeoPaths]   = useState([]);
  const [hoveredId, setHoveredId] = useState(null);
  const hovered = projected.find((l) => l.id === hoveredId);

  // Load India GeoJSON
  useEffect(() => {
    fetch('/india_states.geojson')
      .then((r) => r.json())
      .then((data) => {
        const filtered = data.features.filter((f) => {
          const name = (f.properties.NAME_1 || '').toLowerCase();
          const id1  = f.properties.ID_1;
          // Remove Andaman & Nicobar (ID_1=1) and Lakshadweep (ID_1=19)
          if (id1 === 1 || id1 === 19) return false;
          return !name.includes('andaman') && !name.includes('nicobar') && !name.includes('lakshadweep');
        });
        const paths = filtered.map((f) => ({
          id: f.properties.NAME_1 || f.id,
          d: pathGen(f),
        }));
        setGeoPaths(paths);
      })
      .catch(() => {
        // fallback: leave empty — markers still show
      });
  }, []);

  return (
    <div className="service-map">
      {/* Legend */}
      <div className="service-map__legend">
        <span className="service-map__legend-item">
          <svg width="18" height="18" viewBox="0 0 18 18">
            <polygon points={starPoints(9, 9, 8, 3.5)} fill="#1B4F9E" />
          </svg>
          Corporate Office
        </span>
        <span className="service-map__legend-item">
          <svg width="16" height="16" viewBox="0 0 16 16">
            <polygon points={starPoints(8, 8, 7, 3)} fill="#e53e3e" />
          </svg>
          Branch Office
        </span>
        <span className="service-map__legend-item">
          <svg width="14" height="18" viewBox="0 0 14 18">
            <line x1="4" y1="2" x2="4" y2="16" stroke="#e53e3e" strokeWidth="1.5" />
            <polygon points="4,2 12,5 4,8" fill="#e53e3e" />
            <circle cx="4" cy="16" r="2" fill="#e53e3e" />
          </svg>
          Service Centre
        </span>
      </div>

      {/* Map */}
      <div className="service-map__wrap">
        <svg
          viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
          className="service-map__svg"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Clip more from upper-right (Aksai Chin) than upper-left (real J&K/Ladakh) */}
            <clipPath id="india-clip">
              <polygon points={`0,30 ${WIDTH},88 ${WIDTH},${HEIGHT} 0,${HEIGHT}`} />
            </clipPath>
          </defs>
          {/* State fills */}
          {geoPaths.length === 0 && (
            <text x={WIDTH / 2} y={HEIGHT / 2} textAnchor="middle" fill="#aaa" fontSize="14">
              Loading map…
            </text>
          )}
          <g clipPath="url(#india-clip)">
          {geoPaths.map((s) => (
            <path
              key={s.id}
              d={s.d}
              fill="#dbe8f8"
              stroke="#7dabd6"
              strokeWidth={0.6}
            />
          ))}
          </g>

          {/* Markers */}
          {projected.map((loc) => {
            const { px, py, type, id, city } = loc;
            const isHov = hoveredId === id;
            const scale = isHov ? 1.55 : 1;

            return (
              <g
                key={id}
                transform={`translate(${px},${py})`}
                onMouseEnter={() => setHoveredId(id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{ cursor: 'pointer' }}
              >
                <g style={{ transform: `scale(${scale})`, transformOrigin: '0 0', transition: 'transform 0.2s' }}>
                  {type === 'corporate' && (
                    <>
                      <circle r={11} fill="#1B4F9E" fillOpacity={0.2} />
                      <polygon
                        points={starPoints(0, 0, 8, 3.5)}
                        fill="#1B4F9E"
                        stroke="#fff"
                        strokeWidth={0.8}
                      />
                    </>
                  )}
                  {type === 'branch' && (
                    <>
                      <circle r={9} fill="#e53e3e" fillOpacity={0.2} />
                      <polygon
                        points={starPoints(0, 0, 7, 3)}
                        fill="#e53e3e"
                        stroke="#fff"
                        strokeWidth={0.8}
                      />
                    </>
                  )}
                  {type === 'service' && (
                    <>
                      <line x1={0} y1={-8} x2={0} y2={5} stroke="#e53e3e" strokeWidth={1.4} />
                      <polygon points="0,-8 7,-5 0,-2" fill="#e53e3e" />
                      <circle cx={0} cy={5} r={2} fill="#e53e3e" />
                    </>
                  )}
                </g>
                <text
                  y={type === 'corporate' ? 18 : type === 'branch' ? 16 : 14}
                  textAnchor="middle"
                  fontSize={type === 'corporate' ? 7 : 5.5}
                  fontWeight={type === 'service' ? '500' : '700'}
                  fill={type === 'corporate' ? '#0D2E5C' : '#333'}
                  style={{ pointerEvents: 'none', userSelect: 'none' }}
                >
                  {city}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Tooltip — beside the hovered marker */}
        <AnimatePresence>
          {hovered && (() => {
            const xPct = (hovered.px / WIDTH) * 100;
            const yPct = (hovered.py / HEIGHT) * 100;
            const onRight = xPct > 55;
            return (
              <motion.div
                key={hovered.id}
                className={`map-tooltip map-tooltip--${hovered.type}`}
                style={{
                  left:  onRight ? `${xPct}%` : `${xPct}%`,
                  top:   `${yPct}%`,
                  transform: onRight
                    ? 'translate(calc(-100% - 14px), -50%)'
                    : 'translate(14px, -50%)',
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.15 }}
              >
                <span className={`map-tooltip__badge map-tooltip__badge--${hovered.type}`}>
                  {hovered.type === 'corporate' ? 'Corporate Office' : hovered.type === 'branch' ? 'Branch Office' : 'Service Centre'}
                </span>
                <p className="map-tooltip__name">{hovered.info.name}</p>
                {hovered.info.contact && (
                  <p className="map-tooltip__contact">👤 {hovered.info.contact}</p>
                )}
                <p className="map-tooltip__city">📍 {hovered.city}</p>
                <p className="map-tooltip__address">{hovered.info.address}</p>
                <a
                  href={`tel:${hovered.info.phone.replace(/[\s-]/g, '')}`}
                  className="map-tooltip__phone"
                >
                  📞 {hovered.info.phone}
                </a>
              </motion.div>
            );
          })()}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ServiceCentresMap;
