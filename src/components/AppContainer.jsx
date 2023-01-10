function AppContainer({ children, style }) {
  return (
    <div className="mx-auto pt-16 px-4 max-w-6xl h-screen" style={style}>
      {children}
    </div>
  )
}

export default AppContainer
