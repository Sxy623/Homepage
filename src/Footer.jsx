import React from 'react'
import { Link } from '@material-ui/core'
import { Link as RouterLink } from 'react-router-dom'

export default function Footer () {
  return (
    <div>
      <hr />
      <p>© 2021 Xinyi Shen.</p>
      <p>18888921102 | shenxinyi@zju.edu.cn</p>
      <Link component={RouterLink} to="/">Home</Link>{' | '}
      <Link component={RouterLink} to="/conjugacion">Conjugación</Link>
    </div>
  )
}
