import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
  useCodeScanner,
} from 'react-native-vision-camera';

const BarcodeReader = () => {
  const {hasPermission, requestPermission} = useCameraPermission();
  //   const [scanFrame, setScanFrame] = useState<CodeScannerFrame>({
  //     height: 1,
  //     width: 1,
  //   });

  //   const [layout, setLayout] = useState<
  //     LayoutChangeEvent['nativeEvent']['layout']
  //   >({x: 0, y: 0, width: 0, height: 0});
  const device = useCameraDevice('back');

  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'code-128'],
    onCodeScanned: codes => {
      codes.forEach(code => {
        console.log(`Scanned code type: ${code.type}`);
        console.log(`Scanned code value: ${code.value}`);
      });
    },
  });

  //   const onLayout = (evt: LayoutChangeEvent) => {
  //     if (evt.nativeEvent.layout) {
  //       setLayout(evt.nativeEvent.layout);
  //     }
  //   };

  if (device == null) return <Text>Device not found</Text>;

  return (
    <>
      <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
        // onLayout={onLayout}
        codeScanner={codeScanner}
      />
    </>
  );
};
export default BarcodeReader;
export const styles = StyleSheet.create({
  safeArea: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  fullScreenCamera: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    flex: 1,
    zIndex: 100,
  },
});
