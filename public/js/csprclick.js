const clickSDKOptions = {
    appName: "CSPR.click demo",
    appId: "csprclick-template",
    contentMode: "iframe",
    providers: ['casper-wallet', 'casper-signer'],
  };
  
  const NETWORKS = ['Mainnet', 'Testnet'];
  
  const clickUIOptions = {
    topBarContainer: 'csprclick-top-bar',
    accountMenuItems: [
      "ViewAccountOnExplorerMenuItem",
      "CopyHashMenuItem",
      {
        label: 'CSPR.click docs',
        icon: '%PUBLIC_URL%/csprclick-icon.svg',
        badge: {title: 'New', variation: 'green'},
        onClick: () => { window.open('https://docs.cspr.click', '_blank') },
      },
      "BuyCSPRMenuItem"
    ],
    defaultTheme: 'light',
    onThemeChanged: (theme) => { 
      var page = document.querySelector('div#csprclick-topbar');
      if(theme === 'dark')
        page?.classList.add('dark')
      else
        page?.classList.remove('dark')
      console.log("Theme switched to", theme) },
      networkSettings : {
        networks: NETWORKS,
        currentNetwork: NETWORKS[0],
        onNetworkSwitch: (n) => {
          console.log("Network selected", n); 
          window.csprclickUI.setNetwork(n);
        },
      }  
  }