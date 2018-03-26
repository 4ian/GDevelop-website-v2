export const trackEvent = ({ category, label, action, t }) => {
  const categoryWithlang = `${category}-${t('LANG_CODE')}`;
  console.info(
    `Analytics: "${action}" with category=${categoryWithlang} and label=${label}`
  );
  //eslint-disable-next-line
  if (window.ga) {
    //eslint-disable-next-line
    window.ga('send', 'event', categoryWithlang, action, label);
  }
};
