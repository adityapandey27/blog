import React from 'react';

const AboutUs = () => {
  return (
    <section style={{ display: 'flex', alignItems: 'center', backgroundColor: '#f2f2f2', minHeight: '100vh', fontFamily: 'Poppins', color: '#333' }}>
      <div style={{ flex: 1, maxWidth: '6xl', padding: '24px', margin: '0 auto', '@media (min-width: 768px)': { padding: '32px' } }}>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <div style={{ width: '100%', padding: '16px', marginBottom: '20px', '@media (min-width: 768px)': { width: '50%', marginBottom: 0 } }}>
            <div style={{ position: 'relative', maxWidth: 'md' }}>
              <img
                src="https://i.postimg.cc/rF0MKfBV/pexels-andrea-piacquadio-3760263.jpg"
                alt="aboutimage"
                style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
              />
              <div style={{ position: 'absolute', bottom: 0, right: 0, padding: '16px', backgroundColor: '#fff', border: '4px solid #3498db', borderRadius: '8px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
                <p style={{ fontSize: '16px', fontWeight: '600', width: '18rem' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" style={{ position: 'absolute', top: 0, left: 0, width: '4rem', height: '4rem', color: '#3498db', opacity: '0.1' }} viewBox="0 0 16 16">
                    <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"></path>
                  </svg>{' '}
                  Successfully Providing high quality content to the world
                </p>
              </div>
            </div>
          </div>
          <div style={{ width: '100%', padding: '24px', borderTop: '4px solid #3498db' }}>
            <div style={{ paddingLeft: '16px', marginBottom: '16px', borderLeft: '4px solid #3498db' }}>
              <span style={{ fontSize: '12px', color: '#666', textTransform: 'uppercase' }}>Who we are?</span>
              <h1 style={{ marginTop: '8px', fontSize: '24px', fontWeight: '900', color: '#333' }}>About Us</h1>
            </div>
            <p style={{ marginBottom: '16px', fontSize: '16px', lineHeight: '1.75', color: '#666' }}>
              We are commited to provide top notch, high quality content to the World.
              If you want to contribut, please register on this platform and you will get the option to wrtie articles.
            </p>
            <a
              href="#"
              style={{
                padding: '8px 16px',
                textDecoration: 'none',
                color: '#fff',
                backgroundColor: '#3498db',
                borderRadius: '4px',
                transition: 'background-color 0.3s',
                ':hover': { backgroundColor: '#2980b9' },
              }}
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
