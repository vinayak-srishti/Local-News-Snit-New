import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import 'remixicon/fonts/remixicon.css'
import Readersignin from "./Reader/Readersignin";
import ReaderLogin from "./Reader/ReaderLogin";
import Readernav from "./Reader/Readernav";
import Readerforgetpswd from "./Reader/Readerforgetpswd";
import Readerhome from "./Reader/Readerhome";
import Readerhomecarousle from "./Reader/Readerhomecarousle";
import Contributorsignup from "./Contributor/Contributorsignup";
import ContributorLogin from "./Contributor/ContributorLogin";
import Contributorforgetpswd from "./Contributor/Contributorforgetpswd";
import Contributernavbar from "./Contributor/Contributernavbar";
import Navbar from "./Reader/Navbar";
import HomePage from "./Reader/Homepage";
import Readerpoliticspage from "./Reader/Readerpoliticspage";
import Readernavafterlogin from "./Reader/Readernavafterlogin";
import Advertisersignin from "./Advertiser/Advertisersignin";
import AdvertiserLogin from "./Advertiser/AdvertiserLogin";
import Advertiserloginnav from "./Advertiser/Advertiserloginnav"
import Advertiserforgetpswd from "./Advertiser/Advertiserforgetpswd";
import Readernavonlogin from "./Reader/Readernavonlogin";
import Readerprofilesidebar from "./Reader/Readerprofilesidebar";
import Readerprofileaccountinfo from "./Reader/Readerprofileaccountinfo";
import Readerprofile from "./Reader/Readerprofile";
import Readerpageroles from "./Reader/Readerpageroles";
import Readereditprofile from "./Reader/Readereditprofile";
import AdminLogin from "./Admin/AdminLogin";
import Adminlognav from "./Admin/Adminlognav";
import Adminsidebar from "./Admin/Adminsidebar";
import Adminviewuser from "./Admin/Adminviewuser";
import Adminhome from "./Admin/Adminhome";
import Adminviewsingleuser from "./Admin/Adminviewsingleuser";
import Footer from "./Reader/Footer";
import Readerprivicay from "./Reader/Readerprivicay";
import Readreabout from "./Reader/Readreabout";
import Readersports from "./Reader/Readersports";
import Admindashboard from "./Admin/Admindashboard";
import Contributercarousle from "./Contributor/Contributercarousle";
import Contributertrendingtopics from "./Contributor/Contributertrendingtopics";
import Contributersidebar from "./Contributor/Contributersidebar";
import Contributerviewprofile from "./Contributor/Contributerviewprofile";
import Contributerprofile from "./Contributor/Contributerprofile";
import Contributeraddnews from "./Contributor/Contributeraddnews";
import Adminviewadvertiser from "./Admin/Adminviewadvertiser";
import Advertiserrequest from "./Admin/Advertiserrequest";
import Adminviewsingleadvertiser from "./Admin/Adminviewsingleadvertiser";
import Adminviewcontributer from "./Admin/Adminviewcontributer";
import Adminviewsinglecontributer from "./Admin/Adminviewsinglecontributer";
import Readerhome3 from "./Reader/Readerhome3";
import Contributereditprofile from "./Contributor/Contributereditprofile";
import Advertisersidebar from "./Advertiser/Advertisersidebar";
import Advertisermain from "./Advertiser/Advertisermain";
import Advertiserupload from "./Advertiser/Advertiserupload";
import Moderatorsidebar from "./Moderator/Moderatorsidebar";
import Moderatormain from "./Moderator/Moderatormain";
import Moderatorrequest from "./Moderator/Moderatorrequest";
import Moderatorsinglerequest from "./Moderator/Moderatorsinglerequest";
import Others from "./Reader/Others";
import Readerviewonenews from "./Reader/Readerviewonenews";
import Menu from "./Reader/Menu";
import Politicsviewone from "./Reader/Politicsviewone";
import Allnewsviewone from "./Reader/Allnewsviewone";
import ModeratorLogin from "./Moderator/ModeratorLogin";
import Readercarousel2 from "./Reader/Readercarousel2";
import Adminaddrequest from "./Admin/Adminaddrequest";
import Adminviewsinglerequest from "./Admin/Adminviewsinglerequest";
import Comments from "./Reader/Comments";
import Report from "./Reader/Report";
import Contributerviewmynews from "./Contributor/Contributerviewmynews";
import Contributerdltupdtnews from "./Contributor/Contributerdltupdtnews";
import Viewsinglereport from "./Moderator/Viewsinglereport";
import Advertisementviewsingleadds from "./Advertiser/Advertisementviewsingleadds";
import Viewsingleadvertiserreq from "./Admin/Viewsingleadvertiserreq";
import Addsubscription from "./Admin/Addsubscription";
import Viewsubscription from "./Admin/Viewsubscription";
import Payment from "./Reader/Subscriptions/Payment";
import Upgradepayment from "./Reader/Subscriptions/Upgrade/Upgradepayment";
import Checknewscontent from "./Moderator/Ml/Checknewscontent";

function App() {
  //local
  const url = "http://localhost:4004";
  // const url="http://hybrid.srishticampus.in:4003/"
 
  return (
    <BrowserRouter 
    basename="/local_news_aggregator"
    >
      <div>
        <Routes>
          {/* Readrer */}
          <Route path="/" element={[<Readernav />, <Readerhomecarousle /> ,<Readercarousel2 url={url}/>,<Readerhome3 url={url}/>,<Footer/>]} />
          <Route path="/readersignin" element={[<Readernavonlogin />, <Readersignin />]} />
          <Route path="/readerlogin" element={[<Adminlognav/>, <ReaderLogin />]} />
          <Route path="/readernav" element={<Readernav />} />
          <Route path="/politicslogin"element={[<Readernav />,<Readerpoliticspage  url={url} />,<Footer/>]}/>
          <Route path="/sportslogin"element={[<Readernav />,<Readersports url={url}/>,<Footer/>]}/>
          <Route path="/otherslogin"element={[<Readernav />,<Others url={url}/>,<Footer/>]}/>

          <Route path="/reader_home3" element={<Readerhome3 url={url}/>}/>
          <Route path="/readerforgetpswd" element={[<Readernav />, <Readerforgetpswd />]} />
          <Route path="/readerhome" element={[<Readernavafterlogin />, <Readerhomecarousle /> ,<Readercarousel2 url={url}/>,<Readerhome3 url={url}/>,<Footer/>]} />
          <Route path="/readercarousle" element={<Readerhomecarousle />} />
          <Route path="/readernavafter" element={<Readernavafterlogin />} />
          <Route path="/readernavonlogin" element={<Readernavonlogin />} />
          <Route path="/readerhomelogin" element={[<Readernavafterlogin />, <Readerhomecarousle />, <Readerhome />,<Footer/>]} />
          <Route path="/readersidebar" element={<Readerprofilesidebar />} />
          <Route path="/footer" element={<Footer/>}/>
          <Route path="/readre-carousel2" element={<Readercarousel2 url={url}/>}/>

          <Route path="/readerpolitics" element={[<Readernavafterlogin/>,<Readerpoliticspage  url={url} />,<Footer/>]} />
          <Route path="/readersports" element={[<Readernavafterlogin/>,<Readersports url={url}/>,<Footer/>]}/>
          <Route path="/others" element={[<Readernavafterlogin />,<Others url={url}/>,<Footer/>]}/>
          {/* <Route path="/viewonenewssports/:id" element={[<Readernavafterlogin/>,<Readerviewonenews/>,<Footer/>]}/> */}
          {/* <Route path="/viewonepolitics/:id" element={[<Readernavafterlogin/>,<Politicsviewone url={url}/>,<Footer/>]}/> */}
          <Route path="/viewallnewsbyid/:id" element={[<Readernavafterlogin/>,<Allnewsviewone url={url}/>,<Footer/>]}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/comments" element={<Comments/>}/>
          <Route path="/report" element={<Menu data="report"/>}/>

          <Route path="/savednews" element={[<Readernavafterlogin />,<Readerprofile data="savednews"/>]}/>

          <Route path="/readerprofile_accountinfo" element={[<Readernavafterlogin />, <Readerprofile data='account' />,<Footer/>]} />
          <Route path="/reader_pageroles" element={[<Readernavafterlogin />, <Readerprofile data='pagerole' />,<Footer/>]} />
          <Route path="/reader_editprofile" element={[<Readernavafterlogin />, <Readerprofile data='editprofile' />,<Footer/>]} />
          <Route path="/reader_privacy" element={[<Readernavafterlogin/>,<Readerprofile data='readerprivacy'/>,<Footer/>]}/>
          <Route path="/reader_about" element={[<Readernavafterlogin/>,<Readerprofile data='readerabout'/>,<Footer/>]}/>
          <Route path="/reader-viewsubscriptionplans" element={[<Readernavafterlogin/>,<Readerprofile data='reader-viewsubscriptionplans'/>,<Footer/>]}/>
          <Route path="/reader-payment/:id" element={[<Readernavafterlogin/>,<Payment/>,<Footer/>]}/>
          <Route path="/reader-viewsubscribedplan" element={[<Readernavafterlogin/>,<Readerprofile data='reader-viewsubscribedplan'/>,<Footer/>]}/>
          <Route path="/reader-upgradeplan" element={[<Readernavafterlogin/>,<Readerprofile data='reader-upgradeplan'/>,<Footer/>]}/>
          <Route path="/reader-upgradepayment/:id" element={[<Readernavafterlogin/>,<Upgradepayment/>,<Footer/>]}/>

          { /*Contributor*/}
          <Route path="/contributorsignup" element={<Contributorsignup />} />
          <Route path="/contributerlogin" element={[<Adminlognav/>,<ContributorLogin />,<Footer/>]} />
          <Route path="/contributerforgetpswd" element={<Contributorforgetpswd />} />
          <Route path="/contributernavbar" element={<Contributernavbar />} />
          <Route path="/contributer_carousel" element={<Contributercarousle/>}/>
          <Route path="/contributer_trendingtopics" element={<Contributertrendingtopics/>}/>
          <Route path="/contributer_home" element={[<Contributernavbar />,<Others url={url}/>,<Footer/>]}/>
          <Route path="/contributer_sidebar" element={<Contributersidebar/>}/>
          <Route path="/contributer_viewprofile" element={[<Contributernavbar />,<Contributerprofile data='contributerviewprofile'/>,<Footer/>]}/>
          <Route path="/contributer_editprofile" element={[<Contributernavbar />,<Contributerprofile data='contributereditprofile'/>,<Footer/>]}/>
          <Route path="/about" element={[<Contributernavbar />,<Contributerprofile data='about'/>,<Footer/>]}/>
          <Route path="/privacy" element={[<Contributernavbar />,<Contributerprofile data='privacy'/>,<Footer/>]}/>

          <Route path="/contributer_addnews" element={[<Contributernavbar />,<Contributeraddnews/>,<Footer/>]}/>
          <Route path="/contributerviewnewsbyid" element={[<Contributernavbar />,<Contributerviewmynews url={url}/>,<Footer/>]}/>
          <Route path="/contributerdltupdtnews/:id" element={[<Contributernavbar />,<Contributerdltupdtnews url={url}/>,<Footer/>]}/>


          {/* Advertiser */}
          <Route path="/advertisersignin" element={<Advertisersignin />} />
          <Route path="/advertiserlogin" element={[<Adminlognav/>, <AdvertiserLogin />,<Footer/>]} />
          <Route path="/advertiserloginnav" element={<Advertiserloginnav />} />
          <Route path="/advertiserforgetpswd" element={[<Advertiserloginnav />, <Advertiserforgetpswd />]} />
          <Route path="/advertiser_sidebar" element={[<Advertiserloginnav/>,<Advertisersidebar/>,<Footer/>]}/>
          <Route path="/advertiser_viewuploads" element={[<Advertiserloginnav/>,<Advertisermain data="viewpro"/>,<Footer/>]}/>
          <Route path="/advertiser_viewaccount" element={[<Advertiserloginnav/>,<Advertisermain data="viewaccountmy"/>,<Footer/>]}/>
          <Route path="/advertiser_editprofile" element={[<Advertiserloginnav/>,<Advertisermain data="advertiser_editprofile"/>,<Footer/>]}/>
          <Route path="/advertiser_about" element={[<Advertiserloginnav/>,<Advertisermain data="advertiser_about"/>,<Footer/>]}/>
          <Route path="/advertiser_privacy" element={[<Advertiserloginnav/>,<Advertisermain data="advertiser_privacy"/>,<Footer/>]}/>


          <Route path="/advertiser_upload" element={[<Advertiserloginnav/>,<Advertiserupload/>,<Footer/>]}/>
          <Route path="/addsviewbyid/:id" element={[<Advertiserloginnav/>,<Advertisementviewsingleadds url={url}/>,<Footer/>]}/>


          {/* moderator */}
          <Route path="/moderatorlogin" element={[<Adminlognav/>,<ModeratorLogin/>,<Footer/>]}/>
          <Route path="/moderatorsidebar" element={[<Advertiserloginnav />,<Moderatorsidebar/>,<Footer/>]}/>
          <Route path="/moderatorrequest" element={[<Advertiserloginnav />,<Moderatormain data="request"/>,<Footer/>]}/>
          {/* <Route path="/req" element={<Moderatorrequest url={url}/>}/> */}
          <Route path="/moderator_requests" element={[<Advertiserloginnav />,<Moderatormain data="requestm"/>,<Footer/>]}/>
          <Route path="/moderator_singlerequest/:id" element={[<Advertiserloginnav />,<Moderatorsinglerequest url={url}/>,<Footer/>]}/>
          <Route path="/aboutmod" element={[<Advertiserloginnav />,<Moderatormain data='about'/>,<Footer/>]}/>
          <Route path="/privacymod" element={[<Advertiserloginnav />,<Moderatormain data='privacy'/>,<Footer/>]}/>
          <Route path="/allreports" element={[<Advertiserloginnav />,<Moderatormain data='allreports'/>,<Footer/>]}/>
          <Route path="/singlerequest/:id" element={[<Advertiserloginnav />,<Viewsinglereport url={url}/>,<Footer/>]}/>
          <Route path="/contributerrequest" element={[<Advertiserloginnav />,<Moderatormain data='contributerrequest'/>,<Footer/>]}/>
          <Route path="/viewsinglecontributer/:id" element={[<Advertiserloginnav />,<Moderatormain data='viewsinglecontributer'/>,<Footer/>]}/>
          <Route path="/checknewscontent" element={<Checknewscontent/>}/>


          {/* Admin */}
          <Route path="/admin-loginnav" element={<Adminlognav/>}/>
          <Route path="/admin" element={[<Adminlognav/>,<AdminLogin/>,<Footer/>]}/>
          <Route path="/admin_sidebar" element={[<Advertiserloginnav />,<Adminsidebar/>]}/>
          <Route path="/admin_viewuser" element={[<Advertiserloginnav />,<Adminhome data="viewuser"/>,<Footer/>]}/>
          <Route path="/admin_viewsingleuser/:id" element={[<Advertiserloginnav />,<Adminhome data="viewsingleuser"/>,<Footer/>]}/>
          <Route path="/admin_dashboard" element={[<Advertiserloginnav />,<Adminhome data='admindashboard'/>,<Footer/>]}/>
          <Route path="/admin_viewadvertiser" element={[<Advertiserloginnav />,<Adminhome data='viewadvertiser'/>,<Footer/>]}/>
          <Route path="/viewsingleadvertiser/:id" element={[<Advertiserloginnav />,<Adminhome data='viewsingleadvertiser'/>,<Footer/>]}/>
          <Route path="/adminprivacy" element={[<Advertiserloginnav />,<Adminhome data='adminprivacy'/>,<Footer/>]}/>
          <Route path="/adminviewcontributer" element={[<Advertiserloginnav />,<Adminhome data='viewcontributer'/>,<Footer/>]}/>
          <Route path="/admin_viewsinglecontributer/:id" element={[<Advertiserloginnav />,<Adminhome data='viewsinglecontributer'/>,<Footer/>]}/>


          <Route path="/advertiser_request" element={[<Advertiserloginnav />,<Advertiserrequest url={url}/>,<Footer/>]}/>
          <Route path="/addrequests" element={[<Advertiserloginnav />,<Adminhome data="requests" url={url}/>,]}/>
          <Route path="/viewsingleaddrequests/:id" element={[<Advertiserloginnav />,<Adminviewsinglerequest  url={url}/>,]}/>
          <Route path="/addsubscription" element={[<Advertiserloginnav />,<Adminhome data='addsubscription'/>,<Footer/>]}/>
          <Route path="/viewsubscription" element={[<Advertiserloginnav />,<Adminhome data='viewsubscription'/>,<Footer/>]}/>
          <Route path="/Viewsingleadvertiserreq/:id" element={[<Advertiserloginnav />,<Viewsingleadvertiserreq url={url}/>,<Footer/>]}/>
          <Route path="/viewsubscribers" element={[<Advertiserloginnav />,<Adminhome data='viewsubscribers'/>,<Footer/>]}/>


          {/* <Route path="/addsubscription" element={[<Advertiserloginnav />,<Addsubscription/>,<Footer/>]}/> */}
          {/* <Route path="/addsubscription" element={[<Advertiserloginnav />,<Viewsubscription/>,<Footer/>]}/> */}
          {/* 
              <Route path="/oneone" element={<HomePage/>}/>
              <Route path="/nav" element={<Navbar/>}/> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
