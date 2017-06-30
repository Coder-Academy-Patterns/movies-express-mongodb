import React from 'react'

function untilExpiryInSeconds(exp) {
  const now = new Date()
  const expiryDate = new Date(exp * 1000)
  return Math.floor((expiryDate - now) / 1000)
}

export default ({
  userInfo
}) => (
    <div>
        <dl>
          <dt>Email:</dt>
          <dd>{ userInfo.email }</dd>

          <dt>Expires in:</dt>
          <dd>{ untilExpiryInSeconds(userInfo.exp) }s</dd>
        </dl>
    </div>
)
