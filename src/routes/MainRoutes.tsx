import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { HomeLayout } from '../layout/HomeLayout'

export const MainRoutes = () => {
  return (
    <Routes>
     <Route exact path='/' element={<HomeLayout /> }/>
    </Routes>
  )
}
