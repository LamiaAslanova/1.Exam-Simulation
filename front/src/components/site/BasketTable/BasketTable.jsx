import React from 'react'
import BasketTableItem from '../BasketTableItem/BasketTableItem'

const BasketTable = ({rows}) => {
  return (
    <table class="table">
            <thead>
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Title</th>
                    <th scope="col">Description</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    rows.map((row, index) => {
                        return(
                            <BasketTableItem key={index} row={row}/>
                        )
                    })
                }
            </tbody>
        </table>
  )
}

export default BasketTable
