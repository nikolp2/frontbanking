import React from 'react'

const Cards = () => {
  return (
    <div className="flex w-full max-w-3xl mx-auto items-start space-x-6">
    <div className="w-48">
      <nav className="flex flex-col w-48 rounded-lg border">
        <div className="flex-1 grid items-center p-4 text-center">
          <CreditCardIcon className="h-6 w-6" />
          <span className="text-sm font-semibold">All Cards</span>
        </div>
        <div className="flex-1 grid items-center p-4 text-center border-t">
          <CreditCardIcon className="h-6 w-6" />
          <span className="text-sm font-semibold">Personal</span>
        </div>
        <div className="flex-1 grid items-center p-4 text-center border-t">
          <CreditCardIcon className="h-6 w-6" />
          <span className="text-sm font-semibold">Business</span>
        </div>
        <div className="flex-1 grid items-center p-4 text-center border-t">
          <CreditCardIcon className="h-6 w-6" />
          <span className="text-sm font-semibold">Family</span>
        </div>
      </nav>
    </div>
    <div className="grid w-full gap-4">
      <header className="flex items-center gap-4">
        <h1 className="text-2xl font-bold">All Cards</h1>
        <Button size="sm" variant="outline">
          Add New Card
        </Button>
      </header>
      <div className="grid gap-4">
        <Card>
          <CardContent className="flex items-center gap-4">
            <img
              alt="Card"
              className="rounded-lg"
              height="64"
              src="/placeholder.svg"
              style={{
                aspectRatio: "64/64",
                objectFit: "cover",
              }}
              width="64"
            />
            <div className="grid gap-1.5">
              <p className="text-sm font-semibold">Cardholder</p>
              <p className="text-sm text-gray-500">**** **** **** 1234</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-4">
            <img
              alt="Card"
              className="rounded-lg"
              height="64"
              src="/placeholder.svg"
              style={{
                aspectRatio: "64/64",
                objectFit: "cover",
              }}
              width="64"
            />
            <div className="grid gap-1.5">
              <p className="text-sm font-semibold">Cardholder</p>
              <p className="text-sm text-gray-500">**** **** **** 5678</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
  )
}

export default Cards