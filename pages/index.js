import Head from 'next/head'
import styles from '../styles/Home.module.css';

export default function Home() {

  var key = 0;

  function SetKey(){
    const keyField = document.querySelector('#key');
    if(keyField.value == null){
      alert("input key with 4 number! ");
    }
    key = keyField.value;
  }

  function CreateKey(){
    var key1 = Math.floor(Math.random() * 10);
    var key2 = Math.floor(Math.random() * 10);
    var key3 = Math.floor(Math.random() * 10);
    var key4 = Math.floor(Math.random() * 10);
    // var key5 = Math.floor(Math.random() * 10);

    key = key1*1 + key2*10 + key3+100 + key4*1000;

    if(key4==0){
      key = "0" + key;
    }else{
      key = "" + key;
    }
    const keyField = document.querySelector('#key');
    keyField.value = 404;

    // chinese range
    // 0x4E00 , 19968
    // 0x9FA5 , 40869
  }

  // const keyField = document.querySelector('#key');

  // keyField.value = key;
  
  // alert(key);

  function EncodeContent() {
    const inputValue = document.querySelector('#input').value;
    const outputField = document.querySelector('#output');
    var output = "";
    var sampleString = "azAZ";
    const aUnicode = sampleString.charCodeAt(0);
    const zUnicode = sampleString.charCodeAt(1);
    const AUnicode = sampleString.charCodeAt(2);
    const ZUnicode = sampleString.charCodeAt(3);

    if (!inputValue) {
      alert('Please enter your input.')
      return false
    } else {
      for (var i = 0; i < inputValue.length; i++) {
        var char = inputValue.charAt(i);
        var unicode = inputValue.charCodeAt(i);
        // if (aUnicode <= unicode && unicode <= zUnicode) {
        //   char = char; // no changes
        //   output += char;
        // }
        // else if (AUnicode <= unicode && unicode <= ZUnicode) {
        //   char = char; // no changes
        //   output += char;
        // }
        // else if (0x4E00 <= unicode && unicode <= 0x9FA5) {
          var code = unicode + parseInt(key);
          var newChar = String.fromCharCode(code);
          output += newChar;
        // }
        // else {
        //   char = char; // do nothing
        //   output += char;
        // }
      }
      outputField.value = output;
    }
  }

  function DecodeContent() {
      const inputValue = document.querySelector('#output').value;
      const outputField = document.querySelector('#input');
      var output = "";
      var sampleString = "azAZ";
      const aUnicode = sampleString.charCodeAt(0);
      const zUnicode = sampleString.charCodeAt(1);
      const AUnicode = sampleString.charCodeAt(2);
      const ZUnicode = sampleString.charCodeAt(3);
  
      if (!inputValue) {
        alert('Please enter your input.')
        return false
      } else {
        for (var i = 0; i < inputValue.length; i++) {
          var char = inputValue.charAt(i);
          var unicode = inputValue.charCodeAt(i);
          // if (aUnicode <= unicode && unicode <= zUnicode) {
          //   char = char; // no changes
          //   output += char;
          // }
          // else if (AUnicode <= unicode && unicode <= ZUnicode) {
          //   char = char; // no changes
          //   output += char;
          // }
          // else if (0x4E00 <= unicode && unicode <= 0x9FA5) {
            var code = unicode - parseInt(key);
            var newChar = String.fromCharCode(code);
            output += newChar;
          // }
          // else {
          //   char = char; // do nothing
          //   output += char;
          // }
        }
        outputField.value = output;
      }
    }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Learn Cryptography Online
        </h1>
        <div className={styles.headerSpace}></div>
        {/* <form> */}
        {/* <label htmlFor="first">Input Field</label> */}
        <textarea id="key"></textarea>
        <button className={styles.encodeButton} onClick={CreateKey}>New Key</button>
        <button className={styles.encodeButton} onClick={SetKey}>Set Key</button>
        <textarea id="input"></textarea>
        <button className={styles.encodeButton} onClick={EncodeContent}>Encode</button>
        {/* <label htmlFor="last">Result</label> */}
        <textarea className={styles.input} id="output"></textarea>
        <button className={styles.encodeButton} onClick={DecodeContent}>Decode</button>
        {/* </form> */}

      </main>

      <footer>
        {/* <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a> */}
        <div  /> 佣妅佘室柨怠惶
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}