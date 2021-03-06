import styles from "./navbar.module.css";
import Router from 'next/router';
import Head from 'next/head';
import {
  CssBaseline,
  AppBar,
  Toolbar,
} from "@material-ui/core";

export default function navbar(props) {
  return (
    <>
      <Head>
        <title>Ricky and Morty</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <h1 className={styles.siteName} onClick={() => Router.push('/')}>Rick and Morty</h1>
          <h1 className={styles.authButton} onClick={props.auth}>
            {props.isAuth ? "Logout" : "Sign In"}
          </h1>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      {props.isAuth ? (
        props.children
      ) : (
        <>
          <br />
          <br />
          <br />
          <h1 className={styles.signInMessage}>Sign In to continue</h1>
        </>
      )}
    </>
  );
}
