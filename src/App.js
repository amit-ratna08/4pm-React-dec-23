import React from 'react'
import OnClickCompo from './Hoc/OnClickCompo'
import OnmouseCompo from './Hoc/OnmouseCompo'
import OnKeyCompo from './Hoc/OnKeyCompo'

const App = () => {
  return (
    <div>
      <OnClickCompo />
      <OnmouseCompo />
      <OnKeyCompo />
    </div>
  )
}

export default App
