export default UpgradeTab = (listIcon, selectedIconColor) => {
  return {
    stack: {
      id: 'Upgrade',
      children: [
        {
          component: {
            name: 'Upgrade',
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
