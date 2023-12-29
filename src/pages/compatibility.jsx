import React from 'react'

export default function compatibility() {
  return (
    <div style={{
        position: 'relative',
        width: '100%',
        height: 0,
        paddingTop: '75.0000%',
        paddingBottom: 0,
        boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)',
        marginTop: '1.6em',
        marginBottom: '0.9em',
        overflow: 'hidden',
        borderRadius: '8px',
        willChange: 'transform',
      }}>
        <iframe
          loading="lazy"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            border: 'none',
            padding: 0,
            margin: 0,
          }}
          src="https://www.canva.com/design/DAF3TvoVVIs/view?embed"
          allowFullScreen={true}
          allow="fullscreen"
          title="Green Minimalist Financial Services Table Graph"
        />
      </div>
  )
}