import Card from "@mui/material/Card";
import styles from "../styles/Home.module.css";
import BasicSelect from "./comps/selectCate";
import * as React from "react";
import { useCallback } from "react";
import { useState } from "react";
import { useRouter } from "next/router";

import {
    CardContent,
    Grid,
    TextField,
    Button,
    createTheme,
    ThemeProvider,
    Typography,
} from "@mui/material";
import { Component } from "react";
import { useCookies } from "react-cookie";
import { Rule } from "@mui/icons-material";



export default function UploadProduct() {
    const [cookies, setCookie, removeCookie] = useCookies(['Member', 'Cart']);
    const [Path , setPath] = useState("");
    const [PID , setPID] = useState([]);
    const Router = useRouter();
    const uploadToServer = async (event) => {
        const body = new FormData();
        body.append("file", image);
        console.log(body);
        fetch("../api/upload", {
            method: "POST",
            body,
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data.path, "EIEIEIEIEIEI");
                setPath(data.path)
            });
    };
    const clickMe = useCallback((e) => {
        e.preventDefault();
        console.log(e);
            const upproduct = {
                productName: e.target[0].value,
                productDetail: e.target[4].value,
                productImage: Path,
                productCategory: e.target[7].value,
                productQuantity: e.target[9].value,
                productPrice: e.target[11].value,
                MemberID: cookies['Member'],
            };
            // const puth = upproduct
            const body = new FormData();
            body.append("file", upproduct.productImage);
            console.log(upproduct);
            fetch("/api/api_product", {
                method: "POST",
                body: JSON.stringify({ upproduct }),
                headers: { "Content-Type": "application/json" },
            })
                .then((res) => {
                    return res.json();
                })
                .then((upproduct) => {
                    alert(upproduct.message);
                    console.log(upproduct.message);
                    setPID(upproduct.id)
                });
    }, []);

    const [image, setImage] = useState(null);
    const [createObjectURL, setCreateObjectURL] = useState(null);

    const uploadToClient = (event) => {
        if (event.target.files && event.target.files[0]) {
            const i = event.target.files[0];

            setImage(i);
            setCreateObjectURL(URL.createObjectURL(i));
        }
    };
    //uploadProduct.js + upload.js + api_product.js + changeImg
    if(Path && PID){
        const changeProduct ={
            Product_Image : Path,
            Product_ID : PID,
        }
        fetch("/api/changeImg", {
            method: "POST",
            body: JSON.stringify({ changeProduct }),
            headers: { "Content-Type": "application/json" },
        })
            .then((res) => {
                return res.json();
            })
            .then((_data) => {
                console.log(_data)
            });
    }

    return (
        <main className={styles.main}>
            <Card style={{ maxWidth: 450, margin: "0 auto", padding: "20px 5px" }}>
                <CardContent>
                    <Typography gutterBottom variant="h4">
                        Publish Product
                    </Typography>
                    <form action="" method="post" onSubmit={clickMe}>
                        <Grid container spacing={1}>
                            <Grid xs={12} item>
                                <TextField
                                    label="Product Name"
                                    name="productName"
                                    placeholder="Enter product name"
                                    variant="outlined"
                                    fullWidth
                                    required
                                />
                            </Grid>
                            {/* <Grid xs={1.5} item>
                <UploadButtons></UploadButtons>
              </Grid> */}
                            {/* <Grid xs = {12} item>
                            <TextField  type="URL" label = "URL photo" name = "productImage" placeholder= "Enter URL photo" variant="outlined" fullWidth required/>
                        </Grid> */}
                            <Grid xs={12} item>
                                <div>
                                    <div>
                                        <img src={createObjectURL} />
                                        <TextField
                                            label=""
                                            placeholder="Enter product name"
                                            variant="outlined"
                                            fullWidth
                                            required
                                            type="file" name="myImage" onChange={uploadToClient}
                                        />
                                        {/* <input type="file" name="myImage" onChange={uploadToClient} /> */}
                                        {/* <button
          className="btn btn-primary"
          type="submit"
          onClick={uploadToServer}
        >
          Send to server
        </button> */}
                                    </div>
                                </div>
                            </Grid>
                            <Grid xs={12} item>
                                <TextField
                                    type="text"
                                    name="productDetail"
                                    multiline
                                    rows="4"
                                    label="Product Details"
                                    placeholder="Enter product detail "
                                    variant="outlined"
                                    fullWidth
                                    required
                                />
                            </Grid>
                            <Grid xs={12} item>
                                <BasicSelect></BasicSelect>
                            </Grid>
                            <Grid xs={12} item>
                                <TextField
                                    type="number"
                                    InputProps={{ inputProps: { min: 1 } }}
                                    name="productQuantity"
                                    label="Product Quantity"
                                    placeholder="Enter product quantity"
                                    variant="outlined"
                                    fullWidth
                                    required
                                />
                            </Grid>
                            <Grid xs={12} item>
                                <TextField
                                    type="number"
                                    InputProps={{ inputProps: { min: 1 } }}
                                    name="productPrice"
                                    label="Product Price"
                                    placeholder="Enter product price"
                                    variant="outlined"
                                    fullWidth
                                    required
                                />
                            </Grid>

                            <Grid xs={12} item>
                                <ThemeProvider theme={theme}>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="neutral"
                                        fullWidth
                                        onClick={uploadToServer}
                                    >
                                        Submit
                                    </Button>
                                </ThemeProvider>
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
            </Card>
        </main>
    );
}

const theme = createTheme({
    palette: {
        neutral: {
            main: "#673ab7",
            contrastText: "#fff",
        },
    },
});