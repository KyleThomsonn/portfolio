import { appTitle } from "../global/global";

function PageNotFound() {

  useEffect(() => {
    document.title = appTitle + " | 404 Error";
  }, [])
  return (
    <main id="#main">
      <div>Page Not Found :(</div>
    </main>
  )
}

export default PageNotFound