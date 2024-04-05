import React, { useEffect, useState } from "react";
import './Home.module.css'
import { Box, IconButton, Paper, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';


export default function Home() {
  const [myData, setMyData] = useState([]);
  let totalPrice = 0;

  const handleDelete = (item) => {

    fetch(`http://localhost:3100/myData/${item.id}`, {
      method: "DELETE"
    });

    const newArray = myData.filter((myObject) =>
      myObject.id !== item.id
    )
    setMyData(newArray)
  }

  useEffect(() => {
    fetch(`http://localhost:3100/myData`)
      .then((response) => response.json())
      .then((data) => setMyData(data))
  }, []);

  return <>
    <Box>

      {myData.map((item) => {
        totalPrice += item.price;
        return (
          <Paper key={item.id} className=" position-relative py-3 mt-3" sx={{ display: "flex", justifyContent: "space-between", width: "400px ", alignItems: "center", padding: "0 20px" }} elevation={3} >

            <Typography className="mt-2 px-2" variant="h6" >{item.title}</Typography>
            <Typography className="mt-2 px-3" variant="h6" >{item.price}$</Typography>

            <IconButton onClick={() =>
              handleDelete(item)
            }
              className="position-absolute closePaper" >
              <CloseIcon />
            </IconButton>
          </Paper>

        )

      }




      )}



      <Typography className="text-center" variant="h6" >
        👉 You Spend is {totalPrice}$
      </Typography>



    </Box >
  </>
}
