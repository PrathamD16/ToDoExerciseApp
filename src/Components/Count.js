import React, {memo} from 'react'

function Count({text, count}) {
  console.log(`This is Count for: ${text}`)
  return (
    <div>
      {text} -- {count}
    </div>
  )
}

export default React.memo(Count)
