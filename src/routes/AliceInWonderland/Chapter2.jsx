
import { Unity, useUnityContext } from "react-unity-webgl";



function Chapter2() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "../../public/AliceChapter2/Build/AliceChapter2.loader.js",
    dataUrl: "../../public/AliceChapter2/Build/AliceChapter2.data.br",
    frameworkUrl: "../../public/AliceChapter2/Build/AliceChapter2.framework.js.br",
    codeUrl: "../../public/AliceChapter2/Build/AliceChapter2.wasm.br",
  })
  return (
    <>
    <h1> Chapter 2: Alice in the magical hallway</h1>
    <Unity  unityProvider={unityProvider} />

    </>

  )
}

export default Chapter2