//
//  View+Toast.swift
//  USC Film
//
//  Created by Ha Ha on 4/28/21.
//

import SwiftUI

extension View {
    func toast<Content>(isPresented: Binding<Bool>, content: @escaping () -> Content) -> some View where Content: View {
        Toast(
            isPresented: isPresented,
            presenter: { self },
            content: content
        )
    }
}
