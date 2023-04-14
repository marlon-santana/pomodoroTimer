export default function Paper(theme: Object) {
    return {
      MuiPaper: {
        defaultProps: {
          elevation: 3,
        },
  
        variants: [
          {
            props: { variant: "outlined" },
            style: { borderColor: 'white', 
          },
        ],
        
        styleOverrides: {
          root: {
            backgroundImage: "none",
            borderColor: "transparent",
            borderRadius:'32px',
            boxShadow: "none",
            backgroundColor: "transparent",
          },
        },
      },
    };
  }
  