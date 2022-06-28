import Banner from '../../components/home/Banner'
import Features from '../../components/home/Features'

// import useFetch from '../../redux/useFetch'

function Home() {
  // const { isLoading, data, error } = useFetch()
  // console.log(loadData)

  return (
    <main>
      <Banner />
      <Features />
    </main>
  )
}

export default Home
