import Banner from "components/Banner"
import Header from "components/Header"
const banner = [
  'https://picsum.photos/1600/600?random=1',
  'https://picsum.photos/1600/600?random=2',
  'https://picsum.photos/1600/600?random=3'
]

const HomePage = () => {
  return (
    <>
      <div className="home-page">
        <Header />
        <Banner banner={banner} />
        <main className="home-page_main">

        </main>
        這是首頁
      </div>
    </>
  )
}
export default HomePage