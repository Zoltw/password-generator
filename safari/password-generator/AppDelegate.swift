import SafariServices

class AppDelegate: NSObject, NSApplicationDelegate, NSExtensionRequestHandling {
    let passwordGenerator = PasswordGenerator()
    
    func beginRequest(with context: NSExtensionContext) {
        let password = passwordGenerator.generate(length: 12, hasNumbers: true, hasSymbols: true)
        
        let script = NSExtensionItem()
        script.userInfo = [ NSExtensionJavaScriptFinalizeArgumentKey : ["password" : password] ]
        
        context.completeRequest(returningItems: [script], completionHandler: nil)
    }
}
