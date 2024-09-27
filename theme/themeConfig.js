const themeConfig = {
  token: {
    controlHeightSM: 34,
    controlHeight: 40,
    controlHeightLG: 46,
    colorPrimary: "#0f766e",
    colorInfo: "#0f766e",
    colorBgContainer: "#ffffff",
    algorithm: true,
  },
  components: {
    Button: {
      defaultShadow: "",
      primaryShadow: "",
      fontWeight: 600,
      algorithm: true,
    },
    Dropdown: {
      paddingBlock: 10,
      fontSize: 16,
      fontSizeIcon: 16,
      controlItemBgActive: "rgb(15,118,110)",
      controlItemBgActiveHover: "rgb(15,118,110)",
      algorithm: true,
    },
    Menu: {
      horizontalItemSelectedColor: "rgb(15,118,110)",
      horizontalItemHoverColor: "rgb(15,118,110)",
      colorPrimaryBorder: "rgba(15,118,109,0.1)",
      controlHeightLG: 46,
      itemActiveBg: "rgba(15,118,109,0.1)",
      itemHoverColor: "rgb(15,118,110)",
      groupTitleColor: "rgb(15,118,110)",
      itemSelectedColor: "rgb(15,118,110)",
      itemSelectedBg: "rgba(15,118,109,0.1)",
      algorithm: true,
    },
    Pagination: {
      colorPrimary: "rgb(15,118,110)",
      colorPrimaryBorder: "rgba(15,118,109,0.1)",
      colorPrimaryHover: "rgba(15,118,109,0.9)",
      controlOutline: "rgba(15,118,109,0.1)",
      colorBgTextHover: "rgba(15,118,109,0.1)",
      algorithm: true,
    },
    Select: {
      optionSelectedBg: "rgb(15,118,110)",
      optionSelectedColor: "rgba(255,255,255,0.88)",
    },
    Tooltip: {
      colorBgSpotlight: "rgb(15,118,110)",
      fontSize: 16,
    },
    Form: {
      itemMarginBottom: 12,
    },
    Input: {
      colorBorder: "rgb(188,188,188)",
      activeBorderColor: "rgb(15,118,110)",
      hoverBorderColor: "rgb(15,118,110)",
      lineWidth: 2,
      activeShadow: "0 0 0 2px rgba(15, 118, 110, 0.3)",
    },
  },
};

export default themeConfig;
