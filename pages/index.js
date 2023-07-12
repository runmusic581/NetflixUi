import Banner from "@/Components/Banner";
import Row from "@/Components/Row";
import requests from "@/Request";

const index = () => {
  return (
    <div>
      <Banner/>
      <Row rowId='1' title='Up Comming' fetchURL={requests.requestUpcoming}/>
      <Row rowId='2' title='Popular' fetchURL={requests.requestPopular}/>
      <Row rowId='3' title='Trending' fetchURL={requests.requestTrending}/>
      <Row rowId='4' title='Top Rated' fetchURL={requests.requestTopRated}/>
      <Row rowId='5' title='Horror' fetchURL={requests.requestHorror}/>
    </div>
  );
};

export default index;
