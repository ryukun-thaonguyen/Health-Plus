export default HomeTab = (listIcon, selectedIconColor) => {
  return {
    stack: {
      id: 'HomeTab',
      children: [
        {
          component: {
            name: 'Home',
            options: {
              topBar: {
                visible: false,
              },
              bottomTab: {
                icon: listIcon[0],
                selectedIconColor: selectedIconColor,
                animate: false,
              },
            },
          },
        },
      ],
    },
  };
};
