import Foundation

class PasswordGenerator {
    private let alphaLower = "abcdefghijklmnopqrstuvwxyz"
    private let alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    private let numbers = "0123456789"
    private let symbols = "!@#$%^&*_-+="

    func generate(length: Int, hasNumbers: Bool = true, hasSymbols: Bool = true) -> String {
        assert(length >= 8, "Length must be at least 8 to ensure password complexity")

        var password = ""
        password += getRandomCharacter(from: alphaLower)
        password += getRandomCharacter(from: alphaUpper)
        password += hasNumbers ? getRandomCharacter(from: numbers) : ""
        password += hasSymbols ? getRandomCharacter(from: symbols) : ""

        let allCharacters = alphaLower + alphaUpper + (hasNumbers ? numbers : "") + (hasSymbols ? symbols : "")
        for _ in password.count..<length {
            password += getRandomCharacter(from: allCharacters)
        }

        return shuffle(string: password)
    }

    private func getRandomCharacter(from string: String) -> String {
        let randomIndex = Int.random(in: 0..<string.count)
        let randomCharIndex = string.index(string.startIndex, offsetBy: randomIndex)
        return String(string[randomCharIndex])
    }

    private func shuffle(string: String) -> String {
        return String(string.shuffled())
    }
}
