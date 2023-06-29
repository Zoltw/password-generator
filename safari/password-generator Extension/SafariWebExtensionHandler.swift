import SafariServices

class SafariExtensionHandler: SFSafariExtensionHandler {
    override func toolbarItemClicked(in window: SFSafariWindow) {
        let passwordGenerator = PasswordGenerator()
        let newPassword = passwordGenerator.generate(length: 16, hasNumbers: true, hasSymbols: true)
        let pasteboard = NSPasteboard.general
        pasteboard.clearContents()
        pasteboard.setString(newPassword, forType: .string)
    }
}
