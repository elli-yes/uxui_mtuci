function AppButton({ children, style }) {
  return (
      <button style={style} className="border-b border-solid border-white hover:border-black px-4 h-10">
        { children }
      </button>
  )
}

export default AppButton
