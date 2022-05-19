
export default function Header({children, className}){
  return (
    <main className={`d-flex flex-column gap-3 text-center bg-white py-5 `}>
      <header className="fs-1 fw-bold hot-gradient">Latest worldwide news,<br/> everything in one place</header>
      <p className={className} style={{fontFamily: 'Quicksand'}} >{children}</p>
    </main>
  )
}