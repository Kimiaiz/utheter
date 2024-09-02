import Component, { PageEl } from '@/components/Libs/Component';
import Copy from '@/components/Libs/Copy';
import Router from 'next/router'
import Window from '@/components/Libs/Window';
import TextBox from '@/components/Libs/TextBox';
import Icon2Titles from '@/components/Libs/Icon2Titles';
import Icon3Titles from '@/components/Libs/Icon3Titles';


export default p => Component(p, Page);
const Page: PageEl = (props, state, refresh, getProps) => {

  let styles = global.styles

  global.lang = {ff:"vr", ffb:"vb"}


  return (
    <div style={{ direction: "rtl", minHeight: "11vh"}}>
      <br-x />
      <Window title={"The current price of Tether (Dollors)"} style={{ minHeight: 200, margin: 10, width: "calc(100% - 20px)" }}>
        
      <br-xx/> 

        <div style={{width:"100%", height:75, backgroundColor:"slategray", borderRadius:10, 
          textAlign:"center"
        }}>
          <br-x/>
          <br-x/>
          <br-x/>
          <br-xx/>
          Price : {(props.price as number)}
        </div>
        <br-xx/>
        <div style={{width:"100%", height:75, backgroundColor:"slategray", borderRadius:10, 
          textAlign:"center"
        }}>
          <br-x/>
          <br-x/>
          <br-x/>
          <br-xx/>
          Daily changes : {(props.diff24d as number)}%
        </div>
        <br-xx/>
        <div style={{width:"100%", height:75, backgroundColor:"slategray", borderRadius:10, 
          textAlign:"center"
        }}>
          <br-x/>
          <br-x/>
          <br-x/>
          <br-xx/>
          Weekly changes : {(props.diff7d as number)}%
        </div>
        <br-xx/>
        <div style={{width:"100%", height:75, backgroundColor:"slategray", borderRadius:10, 
          textAlign:"center"
        }}>
          <br-x/>
          <br-x/>
          <br-x/>
          <br-xx/>
          Monthly changes : {(props.diff30d as number)}%
        </div>
        <br-xx/>
        <div style={{float:"inline-end", width:"33.3%", height:100, backgroundColor:"slategray", borderRadius:10, 
          textAlign:"center"
        }}>
         <br-xx/>
          : Last 24 hours <br-x/> 
          Price : {(props.last24h as number)} <br-x/>
          Max : {(props.last24hMax as number)} <br-x/>
          Min : {(props.last24hMin as number)}
        </div>
        
        <div style={{float:"inline-end",width:"33.3%", height:100, backgroundColor:"slategray", borderRadius:10, 
          textAlign:"center"
        }}>
         <br-xx/>
          : Last 7 days <br-x/> 
          Price : {(props.last7d as number)} <br-x/>
          Max : {(props.last7dMax as number)} <br-x/>
          Min : {(props.last7dMin as number)}
        </div>
        
        <div style={{float:"inline-end", width:"33.3%", height:100, backgroundColor:"slategray", borderRadius:10, 
          textAlign:"center"
        }}>
         <br-xx/>
          : Last 30 days <br-x/> 
          Price : {(props.last30d as number)} <br-x/>
          Max : {(props.last30dMax as number)} <br-x/>
          Min : {(props.last30dMin as number)}
        </div>
        <br-x/>
        <br-x/>
        <br-x/>
        <br-x/>
        <center style={{fontSize:12}}>
          تهیه شده توسط تیم پژوهشی تورینگ
        </center>
      </Window>
    </div>
  )
}


export async function getServerSideProps(context) {


  var session = await global.SSRVerify(context)
  var { uid, name, image, imageprop, lang, cchar,
    unit, workspace, servid, servsecret,
    usedquota, quota, quotaunit, status, regdate, expid,
    role, path, devmod, userip, } = session;

    let res = await fetch("https://api.tetherland.com/currencies")
    let data = await res.json()
    let price = data.data.currencies.USDT.price
    let diff24d = data.data.currencies.USDT.diff24d
    let diff7d = data.data.currencies.USDT.diff7d
    let diff30d = data.data.currencies.USDT.diff30d
    let last24h = data.data.currencies.USDT.last24h
    let last24hMax = data.data.currencies.USDT.last24hMax
    let last24hMin = data.data.currencies.USDT.last24hMin
    let last7d = data.data.currencies.USDT.last7d
    let last7dMax = data.data.currencies.USDT.last7dMax
    let last7dMin = data.data.currencies.USDT.last7dMin
    let last30d= data.data.currencies.USDT.last30d
    let last30dMax= data.data.currencies.USDT.last30dMax
    let last30dMin= data.data.currencies.USDT.last30dMin

    
  return {
    props: {
      data: global.QSON.stringify({
        price:price,
        diff24d:diff24d,
        diff7d:diff7d,
        diff30d:diff30d,
        last24h:last24h,
        last24hMax:last24hMax,
        last24hMin:last24hMin,
        last7d:last7d,
        last7dMax:last7dMax,
        last7dMin:last7dMin,
        last30d:last30d,
        last30dMax:last30dMax,
        last30dMin:last30dMin,
        session,
        // nlangs,
      })
    },
  }
}