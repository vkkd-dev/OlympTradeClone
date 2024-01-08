import { ScrollView, StyleSheet, Text } from 'react-native'
import React from 'react'
import { MyColors } from '../../assets/MyColors'

const TNCScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>
        Terms and Conditions for Olympy Global Trade
        Effective Date: [Date]

        Welcome to Olympy Global Trade! Before you start using our crypto app, please read these Terms and Conditions carefully. By accessing and using Olympy Global Trade, you agree to be bound by these terms. If you do not agree with any part of these Terms and Conditions, you may not use our app.

        General
        a. Olympy Global Trade is a cryptocurrency application that allows users to [describe main features and functionalities].
        b. Our app is intended for users who are at least 18 years old. If you are under 18, please do not use our app.
        c. By using our app, you represent and warrant that you have the legal capacity to enter into these Terms and Conditions.

        Account Registration
        a. To use certain features of Olympy Global Trade, you may need to create an account.
        b. You are responsible for maintaining the confidentiality of your account information, including your username and password.
        c. You agree to provide accurate and up-to-date information during the registration process.
        d. You are solely responsible for all activities that occur under your account.

        User Conduct
        a. By using our app, you agree not to engage in any unlawful, harmful, or disruptive activities.
        b. You must not use Olympy Global Trade for any illegal purposes, including money laundering, fraud, or any other criminal activities.

        Cryptocurrency Trading
        a. Olympy Global Trade provides cryptocurrency trading services. Please be aware that cryptocurrency trading involves risks, and you may lose all or part of your investments.
        b. You acknowledge and understand that cryptocurrency prices can be highly volatile and may change rapidly.
        c. We do not provide financial or investment advice. All decisions related to cryptocurrency trading are made at your own risk.

        Fees and Charges
        a. Olympy Global Trade may charge fees for certain services, and you agree to pay these fees as applicable.
        b. Fees and charges may be subject to change at any time, and we will notify you of any changes.

        Intellectual Property
        a. All content and materials provided on Olympy Global Trade, including logos, trademarks, and design, are the property of Olympy Global Trade and protected by applicable intellectual property laws.
        b. You may not use, reproduce, or distribute any content from our app without our prior written consent.

        Privacy
        a. Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and disclose your information.

        Disclaimer of Warranties
        a. Olympy Global Trade is provided "as is," and we make no warranties or representations regarding the accuracy, reliability, or completeness of our app.
        b. We do not guarantee uninterrupted or error-free access to Olympy Global Trade.

        Limitation of Liability
        a. To the extent permitted by law, Olympy Global Trade and its affiliates shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from your use of our app.

        Indemnification
        a. You agree to indemnify and hold Olympy Global Trade and its affiliates harmless from any claims, losses, liabilities, or expenses arising from your use of our app.

        Amendments
        a. We may update these Terms and Conditions from time to time. Any changes will be effective upon posting on our app.

        Governing Law and Jurisdiction
        a. These Terms and Conditions shall be governed by and construed in accordance with the laws of [Jurisdiction]. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts of [Jurisdiction].

        By using Olympy Global Trade, you acknowledge that you have read, understood, and agreed to these Terms and Conditions. If you have any questions or concerns, please contact us at [Contact Email].
      </Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  text: {
    color: MyColors.white,
    textAlign: 'justify',
  }
})

export default TNCScreen
