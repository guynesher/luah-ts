import { useTheme, View, Image, Text} from '@aws-amplify/ui-react';
//import { useTheme, View, Image, Text, Heading, Button, useAuthenticator} from '@aws-amplify/ui-react';

export const components = {
    Header() {
      const { tokens } = useTheme();
  
      return (
        <View textAlign="center" padding={tokens.space.large}>
          <Image
            alt="Luah logo"
            src="src\assets\Logo.png"
            objectFit="initial"
            objectPosition="50% 50%"
            backgroundColor="initial"
            height="35%"
            width="35%"
          />
        </View>
      );
    },
  
    Footer() {
      const { tokens } = useTheme();
  
      return (
        <View textAlign="center" padding={tokens.space.large}>
          <Text color={tokens.colors.neutral[80]}>
            &copy; כל הזכויות שמורות
          </Text>
        </View>
      );
    },
  
    // SignIn: {
    //   Header() {
    //     const { tokens } = useTheme();
  
    //     return (
    //       <Heading
    //         padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
    //         level={3}
    //       >
    //         הכנס לחשבון שלך
    //       </Heading>
    //     );
    //    },
    // //   Footer() {
    // //     const { toForgotPassword } = useAuthenticator();
  
    // //     return (
    // //       <View textAlign="center">
    // //         <Button
    // //           fontWeight="normal"
    // //           onClick={toForgotPassword}
    // //           size="small"
    // //           variation="link"
    // //         >
    // //           אפס סיסמא
    // //         </Button>
    // //       </View>
    // //     );
    // //   },
    //  },
  
    // SignUp: {
    //   Header() {
    //     const { tokens } = useTheme();
  
    //     return (
    //       <Heading
    //         padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
    //         level={3}
    //       >
    //         צור סיסמא חדשה
    //       </Heading>
    //     );
    //   },
    //   Footer() {
    //     const { toSignIn } = useAuthenticator();
  
    //     return (
    //       <View textAlign="center">
    //         <Button
    //           fontWeight="normal"
    //           onClick={toSignIn}
    //           size="small"
    //           variation="link"
    //         >
    //           חזרה לכניסה
    //         </Button>
    //       </View>
    //     );
    //   },
    // },
    // ConfirmSignUp: {
    //   // Header() {
    //   //   const { tokens } = useTheme();
    //   //   return (
    //   //     <Heading
    //   //       padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
    //   //       level={3}
    //   //     >
    //   //       הכנס קוד:
    //   //     </Heading>
    //   //   );
    //   // },
    //   // Footer() {
    //   //   return <Text>קוד</Text>;
    //   // },
    // },
    // SetupTotp: {
    //   Header() {
    //     const { tokens } = useTheme();
    //     return (
    //       <Heading
    //         padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
    //         level={3}
    //       >
    //         הכנס קוד:
    //       </Heading>
    //     );
    //   },
    //   Footer() {
    //     return <Text>קוד</Text>;
    //   },
    // },
    // ConfirmSignIn: {
    //   Header() {
    //     const { tokens } = useTheme();
    //     return (
    //       <Heading
    //         padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
    //         level={3}
    //       >
    //         הכנס קוד:
    //       </Heading>
    //     );
    //   },
    //   Footer() {
    //     return <Text>קוד</Text>;
    //   },
    // },
    // ForgotPassword: {
    //   Header() {
    //     const { tokens } = useTheme();
    //     return (
    //       <Heading
    //         padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
    //         level={3}
    //       >
    //         הכנס קוד:
    //       </Heading>
    //     );
    //   },
    //   Footer() {
    //     return <Text> קוד</Text>;
    //   },
    // },
    // ConfirmResetPassword: {
    //   Header() {
    //     const { tokens } = useTheme();
    //     return (
    //       <Heading
    //         padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
    //         level={3}
    //       >
    //         הכנס קוד:
    //       </Heading>
    //     );
    //   },
    //   Footer() {
    //     return <Text>קוד</Text>;
    //   },
    // },
  };
  