// ================================
// Client Logos Component - Analogics Website
// ================================

import { motion } from 'framer-motion';
import './ClientLogos.css';

const clients = [
  { name: 'APEPDCL', logo: '/images/apepdcl-logo.png' },
  { name: 'BBMP', logo: '/images/bbmp-logo.png' },
  { name: 'BESCOM', logo: '/images/bescom-logo.png' },
  { name: 'BSES', logo: '/images/bses-logo.png' },
  { name: 'Coromandel', logo: '/images/coronamandal-logo.png' },
  { name: 'CSEC Mysore', logo: '/images/csec-mysore-logo.png' },
  { name: 'DAE', logo: '/images/dae-logo.png' },
  { name: 'DVVNL', logo: '/images/dvvnl-logo.png' },
  { name: 'E/D Puducherry', logo: '/images/ed-puducherry-logo.png' },
  { name: 'ECIL', logo: '/images/ecil-logo.png' },
  { name: 'Genus', logo: '/images/genus-logo.png' },
  { name: 'GESCOM', logo: '/images/gescom-logo.png' },
  { name: 'GHMC', logo: '/images/ghmc-logo.png' },
  { name: 'Government of Tamil Nadu', logo: '/images/tn-govt-logo.png' },
  { name: 'HESCOM', logo: '/images/hescom-logo.png' },
  { name: 'IFFCO', logo: '/images/iffco-logo.png' },
  { name: 'Infosys', logo: '/images/infosys-logo.png' },
  { name: 'IPPB', logo: '/images/ippb-logo.png' },
  { name: 'ITR DRDO', logo: '/images/itr-drdo-logo.png' },
  { name: 'Karnataka Vikas Grameena Bank', logo: '/images/kvgb-logo.png' },
  { name: 'KRIBHCO', logo: '/images/kribhco-logo.png' },
  { name: 'Larsen & Toubro', logo: '/images/larsen-toubro-logo.png' },
  { name: 'MESCOM', logo: '/images/mescom-logo.png' },
  { name: 'MSEDCL', logo: '/images/msedcl-logo.png' },
  { name: 'Nagar Nigam Jaipur', logo: '/images/nnj-logo.png' },
  { name: 'National Fertilizers Limited', logo: '/images/nfl-logo.png' },
  { name: 'Nepal Electricity Authority', logo: '/images/nepal-electricity-authority-logo.png' },
  { name: 'NHPC', logo: '/images/nhpc-logo.png' },
  { name: 'Power Grid (PGCIL)', logo: '/images/powergrid-logo.png' },
  { name: 'Punjab & Sind Bank', logo: '/images/punjab-sind-bank-logo.png' },
  { name: 'PVVNL', logo: '/images/pvvnl-logo.png' },
  { name: 'Rashtriya Chemicals', logo: '/images/rcfl.png' },
  { name: 'REC', logo: '/images/rec.png' },
  { name: 'Reliance', logo: '/images/reliance.png' },
  { name: 'School Education Department', logo: '/images/sed-logo.png' },
  { name: 'Secure', logo: '/images/secure.png' },
  { name: 'TGSPDCL', logo: '/images/spdcl-tg-logo.png' },
  { name: 'Syndicate Bank', logo: '/images/syndicate-bank-logo.png' },
  { name: 'Tamil Nadu Electricity Board', logo: '/images/tneb-logo.png' },
  { name: 'Tata Power', logo: '/images/tata-power-logo.png' },
  { name: 'TCS', logo: '/images/tcs-logo.png' },
  { name: 'Torrent Power', logo: '/images/torrent-power-logo.png' },
  { name: 'TGRTC', logo: '/images/tsrtc-logo.png' },
  { name: 'TGNPDCL', logo: '/images/tgnpdcl-logo.png' },
  { name: 'TSTS', logo: '/images/tsts-logo.png' },
  { name: 'WBSEDCL', logo: '/images/wbsedcl-logo.png' },
  { name: 'Wipro', logo: '/images/wipro-logo.png' }
];

const ClientLogos = () => {
  return (
    <section className="clients section">
      <div className="container">
        <div className="clients__header">
          <motion.h2 
            className="clients__title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Trusted by World's Best Companies
          </motion.h2>
          <motion.p
            className="clients__subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            ALL OUR CLIENTS
          </motion.p>
        </div>

        <div className="clients__grid">
          {clients.map((client) => (
            <div key={client.name} className="clients__item">
              <div className="clients__logo">
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className={client.logo.includes('ed-puducherry-logo.png') ? 'clients__logo-img clients__logo-img--ed-puducherry' : 'clients__logo-img'}
                  onError={(e) => {
                    const item = e.target.closest('.clients__item');
                    if (item) {
                      item.style.display = 'none';
                    }
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
