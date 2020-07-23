import React from 'react'
import { motion, useCycle, AnimatePresence } from "framer-motion"
import { Grid, Button } from '@material-ui/core'
import { BrowserRouter as Router, Switch, Route, useHistory, Link } from "react-router-dom";
import './App.css'
import App from './App';



const Root = () => {
    const [isOpen, toggleOpen] = useCycle(false, true);

    const variants = {
        open: {
            width: '60vw', transition: {
                staggerChildren: 0.07, delayChildren: 0.2,
                type: "spring",
                stiffness: 75,
                damping: 100
            }
        },
        closed: {
            width: '0vw', transition: {
                staggerChildren: 0.05, staggerDirection: -1, delay: 0.5,
                type: "spring",
                stiffness: 75,
                damping: 100
            }
        },
    }



    const items = [1, 2,]

    return (
        <>
            <Button style={{ position: 'absolute', top: 0 }} onClick={() => toggleOpen(!isOpen)}>oke</Button>
            <motion.div variants={variants} transition={{ damping: 400, type: 'spring' }} animate={isOpen ? "open" : "closed"} exit="closed" style={{ backgroundColor: 'hotpink', width: '0vw', height: '100vh' }}>
                <Grid container>
                    <Grid style={{ margin: 20 }} spacing={4} container>
                        {items.map(item => <Item key={item} />)}
                    </Grid>
                </Grid>
            </motion.div >
        </>
    )
}


const Item = () => {
    const history = useHistory()
    const variants = {
        open: {
            opacity: 1,
            scale: 1,
            transition: {
                y: { stiffness: 1000, velocity: -100 }
            }
        },
        closed: {
            opacity: 0,
            scale: 0,
            transition: {
                y: { stiffness: 1000 }
            }
        }
    };
    return (
        <Grid item xs={6}>
            <Link to='/home'>
                <motion.div variants={variants} style={{ backgroundColor: 'red', width: '100%', height: '200px', borderRadius: '20px' }}></motion.div>
            </Link>
        </Grid >
    )
}

export default Root
