import { useEffect, useRef, useState } from "react"

const Callback = () => {
	const [environment, setEnvironment] = useState('https://auth.es-pro.baikalplatform.com')
	const [clientId, setClientId] = useState('')
	const [purpose, setPurpose] = useState('dpv:FraudPreventionAndDetection#sim-swap')
	const [redirectUri, setRedirectUri] = useState('')
	const [msisdn, setMsisdn] = useState('')
	const [isValid, setIsValid] = useState(false)

	const form = useRef<HTMLFormElement | null>(null)
	const anchor = useRef<HTMLAnchorElement | null>(null)

	const thisSiteRedirectUri = 'https://www.cuatro.studio/ogw/callback'
	const link = `${environment}/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&purpose=${purpose}&state=${msisdn}`

	useEffect(() => {
		setIsValid(form.current?.checkValidity() || false)
	}, [clientId, redirectUri, msisdn])

	return <>
		<nav>
			<a href="/">
				<img src="/imago.svg" alt="Cuatro Studio" />
			</a>
		</nav>
		<main>
			<div className="featured">
				<div>
					<div>
						<h1>Open Gateway</h1>
						<h3>Auth Code Flow links</h3>
						<form
							ref={form}
							onSubmit={e => {
								e.preventDefault()
								if (isValid) anchor.current?.click()
							}}
						>
							<label htmlFor="environment">Environment</label>
							<select
								name="environment"
								onChange={e => setEnvironment(e.target.value)}
							>
								<option value="https://auth.es-pro.baikalplatform.com">Movistar</option>
								<option value="https://sandbox.opengateway.telefonica.com/apigateway">Sandbox</option>
							</select>

							<label htmlFor="client_id">Client ID</label>
							<input
								type="text"
								name="client_id"
								required
								value={clientId}
								onChange={e => setClientId(e.target.value)}
								placeholder="Your client ID"
								className="ogw"
							/>

							<label htmlFor="purpose">Purpose</label>
							<select
								name="purpose"
								onChange={e => setPurpose(e.target.value)}
							>
								<option value="dpv:FraudPreventionAndDetection#sim-swap">SIM Swap</option>
								<option value="dpv:FraudPreventionAndDetection#number-verification-verify-read">Number Verification</option>
								<option value="dpv:RequestedServiceProvision#qod">Mobile QoD</option>
								<option value="dpv:RequestedServiceProvision#home-devices-qod">Home Devices QoD</option>
								<option value="dpv:FraudPreventionAndDetection#location-verification-verify">Device Location</option>
								<option value="dpv:FraudPreventionAndDetection#device-status-roaming-read">Device Status Roaming</option>
								<option value="dpv:FraudPreventionAndDetection#kyc-match">KYC</option>
								<option value="dpv:PaymentManagement#carrier-billing">Carrier Billing</option>
							</select>

							<label htmlFor="redirect_uri">Redirect URI</label>
							<div className="small_button">
								<input
									type="url"
									name="redirect_uri"
									required
									pattern="https://.*"
									placeholder="Where you'll get the code"
									title="Starts with https://"
									value={redirectUri}
									onChange={e => setRedirectUri(e.target.value)}
								/>
								<button
									type="button"
									onClick={() => setRedirectUri(thisSiteRedirectUri)}
								>Use this site's</button>
							</div>

							<label htmlFor="msisdn">MSISDN</label>
							<input
								type="tel"
								name="msisdn"
								required
								pattern="\+[0-9]+$"
								placeholder="End-user's phone number"
								title="Starts with + and followed by numbers"
								value={msisdn}
								onChange={e => setMsisdn(e.target.value)}
							/>

							<button
								type="submit"
								className={isValid ? "" : "disabled"}>
								Start Auth Code Flow
							</button>

							-- or follow the link below --
						
							{!form.current?.checkValidity() &&
								<span className="ogw">
									{link}
								</span>
							}
							{form.current?.checkValidity() && <>
								<a
									ref={anchor}
									href={link}
									target="_blank"
									rel="noreferrer"
									className="ogw"
								>
									{link}
								</a>
							</>}
						</form>
					</div>
				</div>
			</div>
		</main>
	</>	
}

export default Callback