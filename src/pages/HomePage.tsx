import Banner from "components/Banner"
import ClassificationList from "components/ClassificationList"
import Footer from "components/Footer"
import Header from "components/Header"
import Section from "components/Section"
const banner = [
  'https://picsum.photos/1600/600?random=1',
  'https://picsum.photos/1600/600?random=2',
  'https://picsum.photos/1600/600?random=3'
]
const sections = [
  {
    classification: '人氣店家',
    stores: [
      {
        picture: 'https://picsum.photos/600/400?random=11',
        title: '家傳小舖',
        content: '獨家特製辣醬',
        tags: ['生活小物', '手作美食'],
        thumbs: 588,
      },
      {
        picture: 'https://picsum.photos/600/400?random=12',
        title: '家傳小舖',
        content: '獨家特製辣醬',
        tags: ['生活小物', '手作美食'],
        thumbs: 588,
      },
      {
        picture: 'https://picsum.photos/600/400?random=13',
        title: '家傳小舖',
        content: '獨家特製辣醬',
        tags: ['生活小物', '手作美食'],
        thumbs: 588,
      },
      {
        picture: 'https://picsum.photos/600/400?random=14',
        title: '家傳小舖',
        content: '獨家特製辣醬',
        tags: ['生活小物', '手作美食'],
        thumbs: 588,
      },
      {
        picture: 'https://picsum.photos/600/400?random=15',
        title: '家傳小舖',
        content: '獨家特製辣醬',
        tags: ['生活小物', '手作美食'],
        thumbs: 588,
      },
      {
        picture: 'https://picsum.photos/600/400?random=16',
        title: '家傳小舖',
        content: '獨家特製辣醬',
        tags: ['生活小物', '手作美食'],
        thumbs: 588,
      },
      {
        picture: 'https://picsum.photos/600/400?random=17',
        title: '家傳小舖',
        content: '獨家特製辣醬',
        tags: ['生活小物', '手作美食'],
        thumbs: 588,
      },
      {
        picture: 'https://picsum.photos/600/400?random=18',
        title: '家傳k舖',
        content: '多人遊戲',
        tags: ['生活小物', '手作美食', '桌遊'],
        thumbs: 58,
      },
    ]
  },
  {
    classification: '人氣店家',
    stores: [
      {
        picture: 'https://picsum.photos/600/400?random=11',
        title: '家傳小舖',
        content: '獨家特製辣醬',
        tags: ['生活小物', '手作美食'],
        thumbs: 588,
      },
      {
        picture: 'https://picsum.photos/600/400?random=12',
        title: '家傳小舖',
        content: '獨家特製辣醬',
        tags: ['生活小物', '手作美食'],
        thumbs: 588,
      },
      {
        picture: 'https://picsum.photos/600/400?random=13',
        title: '家傳小舖',
        content: '獨家特製辣醬',
        tags: ['生活小物', '手作美食'],
        thumbs: 588,
      },
      {
        picture: 'https://picsum.photos/600/400?random=14',
        title: '家傳小舖',
        content: '獨家特製辣醬',
        tags: ['生活小物', '手作美食'],
        thumbs: 588,
      },
      {
        picture: 'https://picsum.photos/600/400?random=15',
        title: '家傳小舖',
        content: '獨家特製辣醬',
        tags: ['生活小物', '手作美食'],
        thumbs: 588,
      },
      {
        picture: 'https://picsum.photos/600/400?random=16',
        title: '家傳小舖',
        content: '獨家特製辣醬',
        tags: ['生活小物', '手作美食'],
        thumbs: 588,
      },
      {
        picture: 'https://picsum.photos/600/400?random=17',
        title: '家傳小舖',
        content: '獨家特製辣醬',
        tags: ['生活小物', '手作美食'],
        thumbs: 588,
      },
      {
        picture: 'https://picsum.photos/600/400?random=18',
        title: '家傳k舖',
        content: '多人遊戲',
        tags: ['生活小物', '手作美食', '桌遊'],
        thumbs: 58,
      },
    ]
  },
]

const HomePage = () => {
  return (
    <>
      <div className="home-page">
        <Header />
        <Banner banner={banner} />
        <main className="home-page_main">
          <ClassificationList />
          {sections.map(item =>
            <Section
              key={item.classification}
              title={item.classification}
              stores={item.stores}
            />
          )}
        </main>
        <Footer />
      </div>
    </>
  )
}
export default HomePage