# react-exmaple

This Repository going cover below concepts  

1)ErrorBoundary
2)Codesplitting with React.suspense && React.lazy
3)Inbulit sample navigation sytem by using React router 
4)Custom hook to caputure input value

ErrorBoundary:

Scenario: When  we're doing this lazy loading thing, we're actually relying on the network to load our components, and what this means, is that we very well could end up in a situation where one of our components fails to load, and this causes an error. Now, the way that we have it currently, an error in loading one of our components would cause our entire application to crash, right? So, if we could load one and two, but three, for some reason failed the load, these things happen with network requests, then our application would basically crash. So, this is where something called ErrorBoundaries comes in, in react. 

Keypoints:

1)we have to define these components as class-based components, instead of as function-based components
