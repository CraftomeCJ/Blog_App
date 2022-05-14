import '@testing-library/jest-native/extend-expect';
jest.mock(
  '../../node_modules/react-native/Libraries/Animated/NativeAnimatedHelper'
);
jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({
      navigate: jest.fn(),
      dispatch: jest.fn(),
    }),
    useRoute: () => ({
      params: {
        id: '123',
      },
    }),
  };
});
