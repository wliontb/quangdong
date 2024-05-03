<style>html,body { padding: 0; margin:0; }</style>
<div style="font-family:Arial,Helvetica,sans-serif; line-height: 1.5; font-weight: normal; font-size: 15px; color: #2F3044; min-height: 100%; margin:0; padding:0; width:100%; background-color:#edf2f7">
	<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;margin:0 auto; padding:0; max-width:600px">
		<tbody>
			<tr>
				<td align="center" valign="center" style="text-align:center; padding: 40px">
					<a href="{{ url('/') }}" rel="noopener" target="_blank">
						<img alt="Logo" src="{{ url('client/images/logo1.png') }}" />
					</a>
				</td>
			</tr>
			<tr>
				<td align="left" valign="center">
					<div style="text-align:left; margin: 0 20px; padding: 40px; background-color:#ffffff; border-radius: 6px">
						<!--begin:Email content-->
						<div style="padding-bottom: 30px; font-size: 17px;">
							<strong>{{ $data['name'] }}</strong>
						</div>
						<div style="padding-bottom: 30px">{{ $data['description'] }}</div>
						<!--end:Email content-->
						<div style="padding-bottom: 10px">Trân trọng,
						<br>DatViet Electronics.
						<tr>
							<td align="center" valign="center" style="font-size: 13px; text-align:center;padding: 20px; color: #6d6e7c;">
								<p>Cầu Giấy, Hà Nội.</p>
								<p>Copyright ©
								<a href="url('/')" rel="noopener" target="_blank">DatViet Electronics</a>.</p>
							</td>
						</tr></br></div>
					</div>
				</td>
			</tr>
		</tbody>
	</table>
</div>