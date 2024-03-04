
import { Unity, useUnityContext } from "react-unity-webgl";



function Chapter1() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "../../public/AliceChapter1/Build/AliceChapter1.loader.js",
    dataUrl: "../../public/AliceChapter1/Build/AliceChapter1.data.br",
    frameworkUrl: "../../public/AliceChapter1/Build/AliceChapter1.framework.js.br",
    codeUrl: "../../public/AliceChapter1/Build/AliceChapter1.wasm.br",
  })
  return (
    <>
    <h1> Chapter 1: Alice Enters the Wonderland</h1>
    <Unity  unityProvider={unityProvider} />

    </>

  )
}

export default Chapter1