import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{
      backgroundColor: '#02040A',
      color: '#ffffff',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      fontFamily: 'sans-serif',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '72px', fontWeight: 'bold', color: '#1E3DF0', margin: '0 0 10px 0' }}>
        404
      </h1>
      <h2 style={{ fontSize: '20px', marginBottom: '12px', fontWeight: '600' }}>
        Page Not Found
      </h2>
      <p style={{ color: '#94a3b8', fontSize: '14px', marginBottom: '24px', maxWidth: '400px' }}>
        The page or resource you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        style={{
          padding: '10px 20px',
          backgroundColor: '#1E3DF0',
          color: '#ffffff',
          borderRadius: '8px',
          textDecoration: 'none',
          fontSize: '14px',
          fontWeight: '500',
        }}
      >
        Return Home
      </Link>
    </div>
  );
}