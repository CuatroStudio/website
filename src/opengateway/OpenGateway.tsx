import { useEffect, useRef, useState } from "react"

const Callback = () => {
	const [environment, setEnvironment] = useState('https://auth.es-pro.baikalplatform.com')
	const [clientId, setClientId] = useState('')
	const [purpose, setPurpose] = useState('dpv:FraudPreventionAndDetection%23sim-swap')
	const [redirectUri, setRedirectUri] = useState('')
	const [msisdn, setMsisdn] = useState('')
	const [state, setState] = useState('')
	const [isValid, setIsValid] = useState(false)
	const [stateIsNotMSISDN, setStateIsNotMSISDN] = useState(false)

	const form = useRef<HTMLFormElement | null>(null)
	const anchor = useRef<HTMLAnchorElement | null>(null)

	const thisSiteRedirectUri = 'https://www.cuatro.studio/ogw/callback'
	const msisdnParam = msisdn && msisdn.length > 0 ? `&state=${msisdn}` : ''
	const stateParam = state && state.length > 0 ? `&state=${state}` : ''
	const lastParam = stateIsNotMSISDN ? stateParam : msisdnParam
	const link = `${environment}/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&purpose=${purpose}${lastParam}`

	useEffect(() => {
		setIsValid(form.current?.checkValidity() || false)
	}, [clientId, redirectUri, msisdn])

	useEffect(() => {
		if (stateIsNotMSISDN) {
			setMsisdn('')
		}
	}, [stateIsNotMSISDN])

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
								<option value="dpv:FraudPreventionAndDetection%23sim-swap">SIM Swap</option>
								<option value="dpv:FraudPreventionAndDetection%23number-verification-verify-read">Number Verification</option>
								<option value="dpv:RequestedServiceProvision%23qod">Mobile QoD</option>
								<option value="dpv:RequestedServiceProvision%23home-devices-qod">Home Devices QoD</option>
								<option value="dpv:FraudPreventionAndDetection%23location-verification-verify">Device Location</option>
								<option value="dpv:FraudPreventionAndDetection%23device-status-roaming-read">Device Status Roaming</option>
								<option value="dpv:FraudPreventionAndDetection%23kyc-match">KYC</option>
								<option value="dpv:PaymentManagement%23carrier-billing">Carrier Billing</option>
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

							{!stateIsNotMSISDN && <>
								<label htmlFor="msisdn">MSISDN (optional state: use it if you need the identifier on your backend)</label>
								<input
									type="tel"
									name="msisdn"
									pattern="\+[0-9]+$"
									placeholder="End-user's phone number"
									title="Starts with + and followed by numbers"
									value={msisdn}
									onChange={e => setMsisdn(e.target.value)}
								/>
							</>}
							{stateIsNotMSISDN && <>
								<label htmlFor="state">State (use it if you need the identifier on your backend)</label>
								<input
									type="tel"
									name="state"
									placeholder="Whatever state"
									value={state}
									onChange={e => setState(e.target.value)}
								/>
							</>}
							<div style={{
								display: "flex",
								flexDirection: "row",
								alignItems: "start",
								marginTop: 8
							}}>
								<input
									type="checkbox"
									name="stateIsNotMSISDN"
									onChange={e => setStateIsNotMSISDN(e.target.checked)}
								/>
								<label htmlFor="stateIsNotMSISDN" style={{ marginTop: -2 }}>
									<small>State is not an MSISDN</small>
								</label>
							</div>

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